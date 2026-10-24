# GOO ELÉTRICOS — Simulação Autopropelido X1000

React + Vite + TypeScript + Tailwind CSS + Lucide. Simulação comercial (sem checkout, sem aprovação de crédito). O CPF é validado só no navegador e nunca enviado, salvo ou registrado.

## 1. Imagens (obrigatório)
Coloque em `public/images/` com estes nomes exatos:
- `logo-goo-eletricos.png`
- `autopropelido-x1000.png`

## 2. Instalar o Node.js
Baixe a versão LTS em https://nodejs.org e confira com `node -v`.

## 3. Rodar localmente
```bash
npm install
npm run dev      # http://localhost:5173
```

## 4. Build de produção
```bash
npm run build    # gera a pasta dist/
npm run preview
```

## 5. Enviar ao GitHub
```bash
git init
git add .
git commit -m "Primeira versão"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/goo-eletricos.git
git push -u origin main
```
(Crie antes o repositório vazio em https://github.com/new.)

## 6. Publicar na Vercel
1. Acesse https://vercel.com e entre com sua conta do GitHub.
2. **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite (build `npm run build`, saída `dist`). Clique em **Deploy**.

## 7. Atualizar o site
Edite, depois `git add . && git commit -m "Ajustes" && git push`. A Vercel publica sozinha.

## Onde editar
- Valores e link do WhatsApp: `src/utils/currency.ts`
- Dados da empresa (CNPJ, endereço): `src/components/Footer.tsx` e `src/pages/Privacy.tsx` (campos marcados).
