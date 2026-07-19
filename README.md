# DEPLOY — Funil, Criativos & Página

> Você sai com a **página no ar** — e o funil e os criativos junto: a **identidade** do
> projeto, o funil desenhado pro seu **estágio de consciência**, a **página de vendas
> publicada** (Cloudflare Pages) e os **criativos na sua voz**.

Este repositório é o **plugin** que você instala no seu assistente (Claude Code, OpenCode ou
Codex). Funciona nos três.

---

## O que você vai ter

3 módulos, que rodam em sequência ou isolados:

| # | Comando | Entrega |
|---|---|---|
| 1 | `/metodo-funil` | Identidade visual (DESIGN.md) + diagnóstico do estágio de consciência → prescreve o funil |
| 2 | `/pagina-vendas-funil` | A página de vendas (headline, VSL, oferta, prova, CTA…) publicada no ar |
| 3 | `/criativos-funil` | Roteiros de vídeo + banners + prompts, na voz da marca |

O painel **`/deploy`** te dá as boas-vindas, pergunta o modo e mostra o próximo passo.

> **O DEPLOY é o lado execução.** A inteligência (pesquisa, avatar, oferta) é o módulo
> **RECON** — o DEPLOY consome o Offerbook que o RECON gera. Dá pra rodar sem o RECON,
> trazendo o material à mão, mas com o RECON a copy nasce de dado real.

---

## Pré-requisitos

- **Um assistente instalado**: Claude Code, OpenCode ou Codex. *(A aula de setup do curso guia.)*
- **Para publicar a página**: uma conta no **Cloudflare Pages** conectada a um **repositório
  Git**. *(O curso mostra o passo a passo dessa conexão — é o que deixa a página no ar.)*
- **Recomendado**: o Offerbook do **RECON** no mesmo projeto, pra copy com lastro real.

---

## Instalação

### ▸ Claude Code (recomendado)

```
/plugin marketplace add rogeriotravagin/curso-deploy
/plugin install deploy@curso-deploy
```

Comece com:

```
/deploy
```

### ▸ OpenCode

1. Clone: `git clone https://github.com/rogeriotravagin/curso-deploy.git`
2. O injetor já vem em `.opencode/plugins/deploy.js`. Siga a **aula de setup do OpenCode** pra
   apontar a pasta do plugin.
3. Abra o OpenCode na pasta e rode `/deploy`.

### ▸ Codex

1. Clone o repositório (comando acima).
2. O manifesto do Codex está em `.codex-plugin/plugin.json`. Siga a **aula de setup do Codex**
   pra ativar (varia por versão; o curso traz o passo certo).
3. Rode o painel (`/deploy` — no Codex o slash pode ter prefixo próprio).

> Não sabe qual usar? Vá de **Claude Code**.

---

## Como funciona (o que te protege)

- **Nada de dado inventado.** Depoimento, número, resultado e garantia só entram se forem
  **reais e seus** — o que falta vira um aviso visível `⚠️ PREENCHER`, nunca prova fabricada.
- **Você aprova cada passo.** Cada módulo só avança quando você diz **"aprovo"**.
- **A página só vai ao ar com sua confirmação.** Antes de publicar, o plugin te mostra o
  endereço e pede um "publicar" explícito. Nada sobe às suas costas.

## Dois modos

Escolha uma vez (no `/deploy`): 🟢 **Essencial** (rápido e direto) ou 🔴 **Completo** (vai
mais fundo, gasta mais).

---

*Dúvidas de uso e setup: consulte as aulas do curso. Este plugin é a ferramenta; o curso te
ensina a pilotar.*
