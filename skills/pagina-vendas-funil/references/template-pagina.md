# Template da página (HTML) — estrutura

A página é um arquivo estático (HTML + CSS inline ou `styles.css`), pronto pro Cloudflare
Pages. Herda cores/fontes do `DESIGN.md`. Salvar em `projetos/{slug}/05-pagina/`.

```
05-pagina/
  index.html        # a página
  styles.css        # se separar o CSS
  assets/           # imagens que o aluno fornecer
```

## Esqueleto do index.html
```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{promessa curta} — {marca}</title>
  <!-- cores/fontes do DESIGN.md como variáveis CSS -->
</head>
<body>
  <!-- Seções na ordem dos 16 elementos, ajustada ao estágio de consciência -->
  <section class="hero"><!-- headline + subheadline + CTA --></section>
  <section class="dor"><!-- identificação da dor --></section>
  <section class="mecanismo"></section>
  <section class="oferta"><!-- entregáveis + bônus --></section>
  <section class="prova"><!-- ⚠️ PREENCHER se sem depoimento real --></section>
  <section class="preco"><!-- ancoragem + preço + garantia --></section>
  <section class="faq"></section>
  <section class="fechamento"><!-- recap + CTA + PS --></section>
</body>
</html>
```

## Regras
- **Responsivo**: mobile-first; a maioria do tráfego de anúncio é mobile.
- **CTA repetido**: pelo menos no hero, após a oferta e no fechamento.
- **Placeholder honesto**: prova ausente aparece como bloco `⚠️ PREENCHER` visível na página
  de rascunho — removido/substituído só quando o aluno traz o dado real. Nunca fabricar.
- **Voz**: textos na linguagem do avatar; visual no DESIGN.md.
