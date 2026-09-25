# 🌹 Surpresa para ela

Um site romântico e interativo feito em HTML, CSS e JavaScript puro.

## Como usar

1. Abra a pasta do projeto.
2. Coloque suas fotos em `assets/images/`.
3. Use exatamente estes nomes:
   - `foto-01.jpg`
   - `foto-02.jpg`
   - `foto-03.jpg`
   - `foto-04.jpg`
   - `foto-05.jpg`
4. Abra `index.html` no navegador.

## Como personalizar os textos

No `index.html`, procure os blocos `<article class="slide">`.
Cada foto possui:
- um pequeno título;
- uma frase principal;
- um texto complementar.

Também existe uma carta final no final da página.

## Para colocar mais fotos

Duplique um bloco:

```html
<article class="slide">
  ...
</article>
```

e coloque outra imagem/textos dentro dele. O JavaScript cria os indicadores automaticamente.

## Estrutura

```text
surpresa_para_ela/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── images/
    └── audio/
```

Não é necessário instalar Node, PHP ou qualquer dependência para rodar.
