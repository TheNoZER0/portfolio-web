"use client";

import { useEffect, useRef } from "react";

interface Trace {
  points: Array<{ x: number; y: number }>;
  active: boolean;
  pulse: number;
  speed: number;
  width: number;
  color?: 'red' | 'cyan';
}

interface Pad {
  x: number;
  y: number;
  size: number;
  active: boolean;
}

export default function CircuitCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = document.getElementById("circuit-canvas-root");
    if (!container) return;
    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvas.style.opacity = "0.4";
    canvas.style.mixBlendMode = "screen";
    container.appendChild(canvas);
    ref.current = canvas;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;

    const onResize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const { clientWidth, clientHeight } = container;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    onResize();
    window.addEventListener("resize", onResize);

    const traces: Trace[] = [];
    const pads: Pad[] = [];

    const createPCBTrace = (startX: number, startY: number, endX: number, endY: number): Array<{ x: number; y: number }> => {
      const points = [{ x: startX, y: startY }];
      let x = startX;
      let y = startY;

      // Create right-angle paths like real PCB traces
      while (Math.abs(x - endX) > 5 || Math.abs(y - endY) > 5) {
        // Decide whether to move horizontally or vertically first
        if (Math.random() < 0.5 && Math.abs(x - endX) > 5) {
          // Move horizontally
          const stepX = Math.sign(endX - x) * Math.min(Math.abs(endX - x), 30 + Math.random() * 60);
          x += stepX;
          points.push({ x, y });
        } else if (Math.abs(y - endY) > 5) {
          // Move vertically
          const stepY = Math.sign(endY - y) * Math.min(Math.abs(endY - y), 30 + Math.random() * 60);
          y += stepY;
          points.push({ x, y });
        } else {
          break;
        }
      }
      
      // Final point
      if (points[points.length - 1].x !== endX || points[points.length - 1].y !== endY) {
        points.push({ x: endX, y: endY });
      }
      
      return points;
    };

    const createCircuit = () => {
      const { width, height } = canvas;
      traces.length = 0;
      pads.length = 0;

      const gridSpacing = 40;
      const cols = Math.floor(width / gridSpacing);
      const rows = Math.floor(height / gridSpacing);

      // Create a grid of connection points
      const connectionPoints: Array<{ x: number; y: number; connected: boolean }> = [];
      for (let row = 0; row <= rows; row++) {
        for (let col = 0; col <= cols; col++) {
          connectionPoints.push({
            x: col * gridSpacing + (gridSpacing / 2),
            y: row * gridSpacing + (gridSpacing / 2),
            connected: false,
          });
        }
      }

      // Create horizontal power/ground buses (red)
      for (let row = 1; row < rows; row += 2) {
        const y = row * gridSpacing + (gridSpacing / 2);
        traces.push({
          points: [
            { x: 0, y },
            { x: width, y }
          ],
          active: Math.random() < 0.5,
          pulse: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5,
          width: 4 + Math.random() * 3,
          color: 'red',
        });
      }

      // Create vertical power/ground buses (cyan)
      for (let col = 1; col < cols; col += 3) {
        const x = col * gridSpacing + (gridSpacing / 2);
        traces.push({
          points: [
            { x, y: 0 },
            { x, y: height }
          ],
          active: Math.random() < 0.5,
          pulse: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.5,
          width: 4 + Math.random() * 3,
          color: 'cyan',
        });
      }

      // Create signal traces connecting random points
      const numSignalTraces = 80;
      for (let i = 0; i < numSignalTraces; i++) {
        const startPoint = connectionPoints[Math.floor(Math.random() * connectionPoints.length)];
        const endPoint = connectionPoints[Math.floor(Math.random() * connectionPoints.length)];
        
        if (startPoint !== endPoint) {
          traces.push({
            points: createPCBTrace(startPoint.x, startPoint.y, endPoint.x, endPoint.y),
            active: Math.random() < 0.7,
            pulse: Math.random() * Math.PI * 2,
            speed: 0.8 + Math.random() * 1.5,
            width: 2 + Math.random() * 2,
            color: Math.random() < 0.6 ? 'red' : 'cyan',
          });
          
          startPoint.connected = true;
          endPoint.connected = true;
        }
      }

      // Create connection pads at major intersections
      for (let row = 1; row < rows; row += 2) {
        for (let col = 1; col < cols; col += 2) {
          if (Math.random() < 0.4) {
            pads.push({
              x: col * gridSpacing + (gridSpacing / 2),
              y: row * gridSpacing + (gridSpacing / 2),
              size: 4 + Math.random() * 6,
              active: Math.random() < 0.6,
            });
          }
        }
      }

      // Add via holes (smaller connection points)
      for (let i = 0; i < 60; i++) {
        pads.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 2 + Math.random() * 2,
          active: Math.random() < 0.8,
        });
      }
    };

    createCircuit();

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Draw traces
      for (const trace of traces) {
        const pulse = Math.sin(time * 0.002 * trace.speed + trace.pulse) * 0.5 + 0.5;
        const alpha = trace.active ? 0.7 + pulse * 0.3 : 0.4 + pulse * 0.2;
        
        // Choose color based on trace type
        const color = trace.color === 'cyan' 
          ? `rgba(0, 255, 255, ${alpha})` 
          : `rgba(255, 0, 51, ${alpha})`;
        const shadowColor = trace.color === 'cyan'
          ? `rgba(0, 255, 255, ${alpha * 0.8})`
          : `rgba(255, 0, 51, ${alpha * 0.8})`;
        
        ctx.strokeStyle = color;
        ctx.lineWidth = trace.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = trace.active ? 6 : 3;

        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y);
        }
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      // Draw connection pads
      for (const pad of pads) {
        const pulse = Math.sin(time * 0.003 + pad.x * 0.01) * 0.5 + 0.5;
        const alpha = pad.active ? 0.8 + pulse * 0.2 : 0.5 + pulse * 0.3;
        
        ctx.fillStyle = `rgba(255, 0, 51, ${alpha})`;
        ctx.shadowColor = `rgba(255, 0, 51, ${alpha * 0.6})`;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(pad.x, pad.y, pad.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Draw data flow particles along traces
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const trace = traces[i % traces.length];
        if (!trace || trace.points.length < 2) continue;
        
        const progress = ((time * 0.001 * trace.speed + i * 0.3) % 1);
        const pointIndex = Math.floor(progress * (trace.points.length - 1));
        const nextIndex = Math.min(pointIndex + 1, trace.points.length - 1);
        const localProgress = (progress * (trace.points.length - 1)) % 1;
        
        const point1 = trace.points[pointIndex];
        const point2 = trace.points[nextIndex];
        const x = point1.x + (point2.x - point1.x) * localProgress;
        const y = point1.y + (point2.y - point1.y) * localProgress;
        
        const size = 1.5 + Math.sin(time * 0.01 + i) * 0.8;
        const alpha = 0.9 + Math.sin(time * 0.02 + i) * 0.1;

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Add subtle noise for texture
      const noiseCount = Math.floor(width * height * 0.0001);
      for (let i = 0; i < noiseCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.03;
        ctx.fillStyle = `rgba(255, 0, 51, ${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }

      time += 16;
      animationFrame = requestAnimationFrame(draw);
    };
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      container.removeChild(canvas);
    };
  }, []);

  return null;
}


