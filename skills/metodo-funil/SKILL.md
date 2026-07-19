---
name: metodo-funil
description: Use quando o aluno quer gerar a identidade visual do projeto (DESIGN.md), descobrir o estágio de consciência do público (1-5) e receber a prescrição do funil, do anúncio e da página certos pro caso dele. Primeiro passo do DEPLOY, antes da página e dos criativos.
---
# Método & Identidade (Módulo 1 do DEPLOY)

## Overview
Primeiro módulo do DEPLOY. Faz duas coisas que guiam todo o resto: gera a **identidade
visual** (DESIGN.md) e diagnostica o **estágio de consciência** do público (1–5, Schwartz)
para **prescrever** o funil, o anúncio e a página certos. Princípio: **o estágio de
consciência dita a estratégia** — não se escolhe funil por gosto.

Antes de tudo, leia o contrato compartilhado: [modo-e-invariantes](../_shared/modo-e-invariantes.md)
(modo, honestidade da copy, herança do Offerbook, loop "aprovo"). Obedeça-o.

## When to Use
- É o **passo 1** do DEPLOY. Rode antes de `/pagina-vendas-funil` e `/criativos-funil`.
- Quando o aluno tem o Offerbook (do RECON) e vai partir para a execução.
- **Não use** para escrever a página (é o módulo 2) nem os criativos (módulo 3).

## Fluxo
1. **Modo.** Leia `.deploy/config.json`. Sem config → Essencial + aviso.
2. **Herde o Offerbook.** Carregue `03-offerbook/` (e avatar) do projeto. Sem ele, siga a
   regra de herança do contrato (peça material, aponte o RECON). Nicho/público vêm daí.
3. **Identidade (DESIGN.md).** Escolha o caminho com o aluno — ver [references/design-md-guia.md](references/design-md-guia.md).
   - 🟢 Essencial: neutro ou 1 referência, inline.
   - 🔴 Completo: despache `extrator-de-identidade` sobre um site/mood board; gere tokens + preview.
4. **Diagnostique o estágio de consciência (1–5)** a partir do avatar/Offerbook e **prescreva**
   funil, anúncio e página. Tabela em [references/estagios-consciencia.md](references/estagios-consciencia.md).
   Salve o estágio em `config.estagio_consciencia`.
5. **Salve** em `projetos/{slug}/04-identidade/` no formato de [references/template-output.md](references/template-output.md).
6. **Loop "aprovo".** Apresente identidade + diagnóstico + prescrição e pergunte se aprova
   ou quer ajustar. Só finalize no "aprovo".

## Quick Reference
| Etapa | 🟢 Essencial | 🔴 Completo |
|---|---|---|
| Identidade | neutro / 1 referência | agente `extrator-de-identidade` + tokens + preview |
| Saída | DESIGN.md (.md) | DESIGN.md + tokens.json + preview.html |
| Diagnóstico | estágio + prescrição | idem, com justificativa por evidência |

## Common Mistakes
- **Pular o diagnóstico e ir pro visual.** O estágio de consciência é o que prescreve o funil.
- **Inventar identidade "que combinaria".** Extraia de referência real; sem ela, use neutro.
- **Clonar a marca de um concorrente.** Extraia padrão, não copie identidade registrada.
- **Diagnóstico sem lastro.** O estágio sai do avatar/Offerbook real, não do palpite.
- **Finalizar sem "aprovo".** O módulo só fecha quando o aluno aprova conscientemente.
