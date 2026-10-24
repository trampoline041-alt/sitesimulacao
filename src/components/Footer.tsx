import { WHATSAPP_URL } from "../utils/currency";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-100 bg-mist">
      <div className="mx-auto max-w-3xl space-y-2 px-4 py-6 text-center text-xs text-slate-500">
        <p className="font-semibold text-navy">GOO ELÉTRICOS</p>
        <p>Os valores apresentados são ilustrativos e não representam aprovação de crédito.</p>
        <p className="flex justify-center gap-4">
          <a className="underline hover:text-navy" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Atendimento pelo WhatsApp</a>
          <a className="underline hover:text-navy" href="#/privacidade">Privacidade</a>
        </p>
        {/* CNPJ / endereço: preencher quando disponível */}
      </div>
    </footer>
  );
}
