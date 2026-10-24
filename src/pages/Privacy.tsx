import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="screen mx-auto max-w-3xl space-y-4 px-4 pt-6 leading-relaxed">
        <h1 className="text-2xl font-extrabold">Privacidade</h1>
        <p>Este site é uma simulação comercial. O CPF digitado é validado apenas no seu navegador, não é enviado a servidores ou serviços externos, não é registrado em logs e não fica armazenado no aparelho.</p>
        <p>O envio do formulário não representa aprovação de crédito. Para continuar o atendimento, use o botão do WhatsApp; as informações compartilhadas nessa conversa seguem as regras do próprio WhatsApp e da equipe GOO ELÉTRICOS.</p>
        <p>Não solicitamos pagamento nem dados bancários neste site.</p>
        <p className="text-sm text-slate-500">Responsável pelo tratamento / contato: [preencher]</p>
        <a href="#/" className="inline-block font-semibold text-goo underline">Voltar ao início</a>
      </main>
      <Footer />
    </div>
  );
}
