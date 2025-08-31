import { twMerge } from "tailwind-merge";

export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return twMerge(classes.filter(Boolean).join(" "));
}


