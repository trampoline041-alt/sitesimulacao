import { ProductCard } from "./ProductCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { formatBRL, simulate } from "../utils/currency";

export function SimulationSummary() {
  const s = simulate();
  const rows: [string, string][] = [
    ["Valor total", formatBRL(s.total)],
    ["Entrada simulada", formatBRL(s.down)],
    ["Saldo restante", formatBRL(s.balance)],
    ["Quantidade de parcelas", `${s.installments}x`],
  ];
  return (
    <div className="screen space-y-4">
      <h1 className="text-2xl font-extrabold">Resumo da simulação</h1>
      <ProductCard showPower />
      <section aria-label="Valores" className="rounded-3xl bg-navy p-5 text-white shadow-soft">
        <dl className="divide-y divide-white/10">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-3 text-sm">
              <dt className="text-white/75">{k}</dt><dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-2 rounded-2xl bg-white/10 p-4 text-center">
          <p className="text-xs text-white/75">Valor de cada parcela</p>
          <p className="text-3xl font-extrabold text-white">{formatBRL(s.monthly)}</p>
        </div>
      </section>
      <p className="rounded-2xl bg-mist p-4 text-xs leading-relaxed text-slate-600">
        Valores ilustrativos de uma simulação comercial. As condições finais, a disponibilidade do produto e as formas de pagamento devem ser confirmadas com a equipe de atendimento.
      </p>
      <WhatsAppButton />
    </div>
  );
}
