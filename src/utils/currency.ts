const fmt = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export const formatBRL = (v: number) => fmt.format(v);

// Única fonte dos valores da simulação.
export const TOTAL_PRICE = 5998.0;
export const DOWN_PAYMENT = 1000.0;
export const INSTALLMENTS = 12;
export const WHATSAPP_URL = "https://w.app/irabl2";

export function simulate() {
  const balance = TOTAL_PRICE - DOWN_PAYMENT;
  return { total: TOTAL_PRICE, down: DOWN_PAYMENT, balance, installments: INSTALLMENTS, monthly: balance / INSTALLMENTS };
}
