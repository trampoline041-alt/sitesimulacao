import { useState, type FormEvent } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { maskCpf, validateCpf } from "../utils/cpf";

export function CpfForm({ onSubmit }: { onSubmit: () => void }) {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handle = (e: FormEvent) => {
    e.preventDefault();
    const err = validateCpf(cpf);
    setError(err);
    if (err) return;
    setLoading(true);
    // Apenas transição visual (~1s). O CPF não é enviado, salvo ou registrado.
    setTimeout(() => { setCpf(""); setLoading(false); onSubmit(); }, 1000);
  };

  return (
    <form onSubmit={handle} noValidate className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-slate-100">
      <h2 className="text-lg font-bold">Faça sua simulação</h2>
      <label htmlFor="cpf" className="mt-4 block text-sm font-medium">CPF</label>
      <input
        id="cpf" name="cpf" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00"
        value={cpf} maxLength={14} onChange={(e) => { setCpf(maskCpf(e.target.value)); if (error) setError(null); }}
        aria-invalid={!!error} aria-describedby={error ? "cpf-error" : "cpf-help"} disabled={loading}
        className={`mt-1.5 h-14 w-full rounded-2xl border bg-white px-4 text-lg tracking-wide outline-none transition focus:ring-2 focus:ring-goo ${error ? "border-red-400" : "border-slate-200"}`}
      />
      {error ? (
        <p id="cpf-error" role="alert" className="mt-2 text-sm text-red-600">{error}</p>
      ) : (
        <p id="cpf-help" className="mt-2 text-xs text-slate-500">Digite apenas os números.</p>
      )}
      <button type="submit" disabled={loading} className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-goo text-base font-bold text-white transition hover:bg-goo-dark active:scale-[.99] disabled:opacity-80">
        {loading ? (<><Loader2 className="animate-spin" size={20} aria-hidden /> Preparando…</>) : "Continuar simulação"}
      </button>
      <p className="mt-4 flex gap-2 text-xs leading-relaxed text-slate-500">
        <ShieldCheck size={16} className="mt-0.5 shrink-0 text-goo" aria-hidden />
        <span>O CPF é usado apenas neste aparelho para liberar a simulação. Ele não é enviado, salvo ou compartilhado. O atendimento continua pelo WhatsApp com nossa equipe.</span>
      </p>
    </form>
  );
}
