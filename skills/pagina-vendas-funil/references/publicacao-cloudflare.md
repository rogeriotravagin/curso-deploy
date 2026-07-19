# Publicação — Cloudflare Pages via Git (com gate de segurança)

Publicar deixa a página **pública**. Isto é uma ação irreversível na prática. Siga o gate do
contrato (§6) à risca. Publicar sem as duas travas é violação grave.

## Pré-condições (verifique antes de tudo)
- A página foi **aprovada** pelo aluno (loop "aprovo", §5).
- Existe `config.repo_git` (repositório) e `config.cloudflare_project` (projeto no Cloudflare
  Pages já conectado ao repo). Faltou? **Não improvise deploy** — diga o que falta em
  linguagem humana e aponte a aula de setup do curso. Ex.:
  > "Falta conectar seu projeto no Cloudflare Pages ao repositório — o curso tem o passo a
  > passo. Assim que estiver conectado, eu publico pra você."

## O gate (dupla trava)
Mesmo com a página aprovada, **pergunte de novo, mostrando o que vai ao ar**:
> "Vou publicar a página em **{endereço Cloudflare}** a partir do repositório **{repo}**.
> Isso deixa a página **pública** na internet. Confirma? (responda 'publicar')"

- Se ainda há `⚠️ PREENCHER` de prova aberto, **avise em destaque** antes de publicar:
  "Atenção: a página ainda tem campos de prova por preencher — quer publicar assim mesmo?"
- "Aprovo o texto" **não** é "pode publicar". Exija o "publicar" explícito.

## O fluxo (só depois do "publicar")
1. Garanta que os arquivos da página estão em `projetos/{slug}/05-pagina/` dentro do repo
   Git conectado ao Cloudflare Pages.
2. `git add` da pasta da página → `git commit -m "página: {marca}"` → `git push`.
3. O Cloudflare Pages, conectado ao repo, **builda e publica automaticamente** no push.
4. Informe o aluno: "Publicado. Em ~1–2 min a página estará no ar em {endereço}. Pode levar
   um instante pro Cloudflare processar."

## Nunca
- Nunca use credencial/token do aluno por iniciativa própria fora deste fluxo confirmado.
- Nunca faça `git push` de conteúdo não aprovado.
- Nunca prometa que já está no ar antes do build do Cloudflare terminar.
