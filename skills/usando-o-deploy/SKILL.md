---
name: usando-o-deploy
description: Use quando iniciar qualquer sessão num projeto DEPLOY — orienta o aluno leigo, garante a checagem de ambiente antes de publicar, lembra o loop de aprovação e faz os módulos dispararem na hora certa.
---
# Usando o DEPLOY

Bootstrap. Carrega no início da sessão. Você está ajudando um aluno **leigo em terminal** a
sair com a página no ar, o funil e os criativos. Fale simples, uma coisa por vez.

## O produto em uma linha
DEPLOY = 3 módulos: **1) `/metodo-funil`** (identidade + estágio de consciência) →
**2) `/pagina-vendas-funil`** (a página publicada no Cloudflare) → **3) `/criativos-funil`**
(anúncios na voz). Cada um roda isolado. É o lado **execução**; a **inteligência** (pesquisa,
oferta) é do RECON, que o DEPLOY consome.

## Como se comportar (do 1º turno em diante)

1. **Oriente sem exigir o comando certo.** As skills disparam pelo assunto. Se o aluno
   descreve o que quer ("preciso da página"), ative a skill certa. Se está perdido ou é a
   primeira vez, aponte **`/deploy`**.
2. **Respeite o modo.** Tudo obedece `.deploy/config.json`. Regras em
   [_shared/modo-e-invariantes](../_shared/modo-e-invariantes.md).
3. **Nada sem "aprovo".** Cada módulo entrega e espera o aluno aprovar antes de avançar. Você
   nunca se autoaprova (contrato §5).
4. **Publicar tem dupla trava.** A página só vai ao ar com o "aprovo" **e** um "publicar"
   confirmado, vendo o endereço (§6). "Aprovo o texto" ≠ "pode publicar".
5. **Cheque o ambiente ANTES de publicar.** Precisa do Cloudflare Pages conectado ao
   repositório Git. Faltou? Não despeje erro cru:
   > "Pra publicar eu preciso do seu projeto no Cloudflare conectado ao repositório. Ainda
   > não está — o curso mostra como. Quer que eu te aponte? Enquanto isso seguimos montando."

## Invariante
Honestidade da copy sempre: **prova, depoimento, número, garantia e escassez não se
inventam** — faltou, vira `⚠️ PREENCHER` visível. Vale nos dois modos. O aluno revisa e
aprova; você entrega e convida à crítica.
