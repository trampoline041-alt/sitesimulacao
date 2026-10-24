import { useState } from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { CpfForm } from "../components/CpfForm";
import { SimulationSummary } from "../components/SimulationSummary";
import { Footer } from "../components/Footer";

export default function Home() {
  const [step, setStep] = useState<"intro" | "summary">("intro");
  const go = (s: "intro" | "summary") => { setStep(s); window.scrollTo({ top: 0 }); };
  return (
    <div className="min-h-screen bg-white">
      <Header onBack={step === "summary" ? () => go("intro") : undefined} />
      <main className="mx-auto max-w-3xl px-4 pt-6">
        {step === "intro" ? (
          <div className="screen space-y-5">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold leading-tight">Conheça o Autopropelido X1000</h1>
              <p className="mt-2 text-slate-600">Confira as condições comerciais e faça sua simulação.</p>
            </div>
            <ProductCard />
            <CpfForm onSubmit={() => go("summary")} />
          </div>
        ) : (
          <SimulationSummary />
        )}
      </main>
      <Footer />
    </div>
  );
}
