export const onlyDigits = (v: string) => v.replace(/\D/g, "").slice(0, 11);

export function maskCpf(v: string): string {
  const d = onlyDigits(v);
  return d
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

export function validateCpf(value: string): string | null {
  const d = value.replace(/\D/g, "");
  if (d.length === 0) return "Informe seu CPF para continuar.";
  if (d.length < 11) return "O CPF precisa ter 11 números. Confira e tente novamente.";
  if (/^(\d)\1{10}$/.test(d)) return "Este CPF não parece válido. Confira os números digitados.";
  const calc = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(d[i]) * (len + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  };
  if (calc(9) !== Number(d[9]) || calc(10) !== Number(d[10])) return "Este CPF não parece válido. Confira os números digitados.";
  return null;
}
