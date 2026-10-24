import { ProductImage } from "./ProductImage";
import { formatBRL, TOTAL_PRICE } from "../utils/currency";

export function ProductCard({ showPower = false }: { showPower?: boolean }) {
  return (
    <section aria-label="Produto" className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-100">
      <ProductImage src="/images/autopropelido-x1000.png" alt="Autopropelido X1000 vermelho e preto" className="mx-auto h-56 w-full sm:h-72" />
      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold">Autopropelido X1000</h2>
          {showPower && <p className="text-sm text-slate-500">Potência: 1000 W</p>}
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Preço total</p>
          <p className="text-xl font-extrabold text-navy">{formatBRL(TOTAL_PRICE)}</p>
        </div>
      </div>
    </section>
  );
}
