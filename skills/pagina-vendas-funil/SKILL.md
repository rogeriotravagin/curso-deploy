---
name: pagina-vendas-funil
description: Use quando o aluno quer montar a página de vendas — headline, VSL, oferta, ancoragem de preço, prova, bônus, garantia e CTA — com a identidade do projeto e a copy puxada da pesquisa, e publicá-la no ar (Cloudflare Pages). Segundo passo do DEPLOY, depois do método/identidade.
---
# Página de Vendas (Módulo 2 do DEPLOY)

## Overview
Segundo módulo do DEPLOY. Monta a **página de vendas de alta conversão** (16 elementos) com a
identidade do `DESIGN.md` e a copy puxada do **Offerbook real**, e a **publica** no Cloudflare
Pages. Princípio: **a copy repousa em dado real; prova não se inventa.** O que falta de prova
vira `⚠️ PREENCHER` visível — nunca depoimento ou número fabricado.

Antes de tudo, leia o contrato compartilhado: [modo-e-invariantes](../_shared/modo-e-invariantes.md)
— honestidade da copy (§3), herança (§4), loop "aprovo" (§5) e **gate de publicação (§6)**. Obedeça.

## When to Use
- É o **passo 2**. Rode depois do `/metodo-funil` (precisa do DESIGN.md + estágio + prescrição).
- Quando o aluno quer a página no ar a partir da oferta já definida.
- **Não use** para criar os criativos de anúncio (é o módulo 3).

## Fluxo
1. **Modo.** Leia `.deploy/config.json`. Sem config → Essencial + aviso.
2. **Carregue insumos.** `DESIGN.md` (identidade), `metodo.md` (tipo de página prescrito),
   `03-offerbook/` (copy). Faltou o Offerbook? Siga a herança do contrato — não invente.
3. **Monte os 16 elementos.** Escreva cada um puxando do Offerbook; onde falta prova real
   (depoimento, número, resultado), insira `⚠️ PREENCHER` visível. Estrutura em
   [references/16-elementos.md](references/16-elementos.md); HTML em [references/template-pagina.md](references/template-pagina.md).
4. **QA.** 🔴 Completo: despache `revisor-qa-pagina` (completude + lastro + conversão) e
   corrija antes de mostrar. 🟢 Essencial: rode o checklist inline.
5. **Loop "aprovo".** Apresente a página, aponte os `⚠️ PREENCHER`, pergunte se aprova ou ajusta.
6. **Publicar (só após "aprovo" + confirmação).** Siga o **gate** de [references/publicacao-cloudflare.md](references/publicacao-cloudflare.md):
   confirme endereço → commit + push no repo conectado → Cloudflare Pages publica. Nunca
   publique sem a dupla trava do §6.
7. **Salve** em `projetos/{slug}/05-pagina/`.

## Quick Reference
| Etapa | 🟢 Essencial | 🔴 Completo |
|---|---|---|
| Página | 16 elementos, 1 versão | + `revisor-qa-pagina` + 2ª passada |
| Prova ausente | `⚠️ PREENCHER` | idem (nunca fabricar) |
| Publicação | gate §6 (aprovo + confirmar) | idem |

## Common Mistakes
- **Fabricar prova/depoimento/número.** Faltou? `⚠️ PREENCHER`. Nunca invente. (§3)
- **Urgência/escassez falsa ou "resultado garantido".** Só o que é verdade.
- **Publicar sem a dupla trava.** "Aprovo o texto" ≠ "pode publicar". São dois consentimentos.
- **Copy sem Offerbook.** Sem lastro é `💭 hipótese`; puxe do RECON ou peça o material.
- **Ancoragem com preço inventado.** O preço-âncora tem de ser real.
