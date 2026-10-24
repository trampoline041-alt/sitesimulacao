import { useState } from "react";

export function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div role="img" aria-label={alt} className={`grid place-items-center rounded-2xl border border-dashed border-slate-300 bg-mist p-4 text-center text-xs text-slate-500 ${className}`}>
        Imagem não encontrada.<br />Adicione o arquivo em public{src}
      </div>
    );
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={`object-contain ${className}`} />;
}
