import Header from "@/components/Header";
import DynamicPortfolio from "@/components/DynamicPortfolio";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <DynamicPortfolio />
      </main>
    </div>
  );
}
