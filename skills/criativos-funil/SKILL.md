---
name: criativos-funil
description: Use quando o aluno quer gerar os criativos de anúncio — roteiros de vídeo, copy e specs de banners, e prompts prontos — na voz da marca, pra testar e rodar. Terceiro passo do DEPLOY. Consome o dossiê do concorrente do RECON; não re-espiona.
---
# Criativos (Módulo 3 do DEPLOY)

## Overview
Terceiro módulo do DEPLOY. Gera os **criativos na voz da marca**: roteiros de vídeo (gancho,
corpo, CTA), copy + specs de banners, e prompts prontos pra ferramentas de imagem/vídeo.
Princípio: **modela formato/gancho, não copia**; e a copy dos criativos tem o mesmo lastro da
página — nada de promessa ou prova inventada.

**Fronteira com o RECON (importante):** a espionagem estratégica do concorrente é do RECON.
Aqui a gente **consome** o dossiê já existente e, no máximo, modela **formato de criativo**.
Leia a herança no contrato: [modo-e-invariantes](../_shared/modo-e-invariantes.md) (§4), além de
honestidade da copy (§3) e loop "aprovo" (§5).

## When to Use
- É o **passo 3** do DEPLOY. Roda bem depois do método e da página, mas funciona isolado.
- Quando o aluno quer as peças de anúncio prontas pra subir num gerenciador.
- **Não use** para a espionagem estratégica completa do concorrente — isso é o RECON.

## Fluxo
1. **Modo.** Leia `.deploy/config.json`. Sem config → Essencial + aviso.
2. **Insumos.** Carregue Offerbook + `02-concorrentes/` (dossiê do RECON) + DESIGN.md.
   - **Sem dossiê** (DEPLOY avulso): **não espione**. Peça o aluno trazer o que tem do
     concorrente e avise que o **RECON** gera isso — texto exato na herança (§4). Trabalhe
     só com o que ele trouxer, modelando **formato**, não estratégia.
3. **Gere os criativos na voz** — roteiros de vídeo + banners (copy/specs) + prompts.
   Estruturas em [references/formatos-criativos.md](references/formatos-criativos.md).
   - 🟢 Essencial: 2–3 peças de maior alavanca, inline.
   - 🔴 Completo: volume + variações de gancho + mais formatos.
4. **Loop "aprovo".** Apresente as peças, pergunte se aprova ou ajusta.
5. **Salve** em `projetos/{slug}/06-criativos/` — ver [references/template-output.md](references/template-output.md).

## Quick Reference
| Etapa | 🟢 Essencial | 🔴 Completo |
|---|---|---|
| Peças | 2–3 de maior alavanca | volume + variações de gancho |
| Fonte de formato | dossiê do RECON | dossiê + material que o aluno trouxer |
| Mídia | roteiros + specs + prompts | idem, mais formatos |

## Common Mistakes
- **Re-espionar o concorrente.** Isso é do RECON. Aqui, consome o dossiê ou pede material.
- **Copiar o criativo do concorrente.** Modela o *padrão/gancho*, não clona a peça.
- **Prometer nos criativos o que a oferta não entrega.** Mesmo lastro da página (§3).
- **Tentar renderizar vídeo/imagem.** A entrega é roteiro + spec + prompt, não a mídia final.
- **Finalizar sem "aprovo".**
