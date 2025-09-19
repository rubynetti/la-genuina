# Sistema di Articoli - La Genuina

## Come aggiungere un nuovo articolo

Per creare un nuovo articolo, segui questi semplici passaggi:

### 1. Crea un nuovo file Markdown

Crea un nuovo file nella cartella `src/content/articles/` con estensione `.md`.
Il nome del file diventerà parte dell'URL dell'articolo.

Esempio: `nuovo-articolo.md` → `https://yoursite.com/articoli/nuovo-articolo`

### 2. Struttura del file

Ogni articolo deve iniziare con i metadati (frontmatter) in formato YAML:

```markdown
---
title: "Il titolo del tuo articolo"
author: "Nome Autore"
date: "2024-08-19"
corner: "Categoria"
image: "path/to/image.jpg"
slug: "url-friendly-slug"
excerpt: "Breve descrizione dell'articolo che apparirà nell'anteprima"
---

# Il titolo del tuo articolo

Qui inizia il contenuto dell'articolo in formato Markdown.

## Sottotitolo

Puoi usare tutti gli elementi Markdown standard:

- Liste puntate
- **Testo in grassetto**
- *Testo in corsivo*
- [Link](https://example.com)

### Sottosottotitolo

> Citazioni in questo formato

## Un altro paragrafo

Il resto del contenuto...
```

### 3. Campi obbligatori

- **title**: Il titolo dell'articolo
- **author**: L'autore dell'articolo
- **date**: Data in formato YYYY-MM-DD
- **corner**: La categoria/tag che appare nell'angolo (es. "News", "Emergenza", "Vittoria")
- **slug**: URL-friendly version del titolo (solo lettere minuscole, numeri e trattini)

### 4. Campi opzionali

- **image**: Path all'immagine di copertina (può essere URL esterno o file nella cartella `static/`)
- **excerpt**: Breve descrizione per l'anteprima

### 5. Esempio completo

```markdown
---
title: "La vittoria di Rossi contro tutti i pronostici"
author: "F. Gallardi"
date: "2024-09-19"
corner: "Sorpresa"
image: "vittoria-rossi.jpg"
slug: "vittoria-rossi-pronostici"
excerpt: "Nessuno se lo aspettava, ma Rossi è riuscito a ribaltare tutti i pronostici"
---

# La vittoria di Rossi contro tutti i pronostici

Una giornata che resterà nella storia della nostra lega...

## Come è successo

La partita sembrava segnata fin dall'inizio...

```

### 6. Pubblicazione automatica

Una volta salvato il file nella cartella `src/content/articles/`, l'articolo apparirà automaticamente:

- Nella homepage (i 3 più recenti)
- Nella pagina `/articoli` (tutti gli articoli)
- Avrà una pagina dedicata in `/articoli/[slug]`

### 7. Ordinamento

Gli articoli sono ordinati automaticamente per data (dal più recente al più vecchio).

### 8. Immagini

Le immagini possono essere:
- **URL esterni**: `https://example.com/image.jpg`
- **File locali**: metti l'immagine nella cartella `static/` e usa solo il nome: `mia-immagine.jpg`

## Formato Markdown supportato

Il sistema supporta tutto il Markdown standard:

- Titoli (H1, H2, H3, etc.)
- Paragrafi
- Liste puntate e numerate
- Link
- Immagini
- Citazioni
- Testo in grassetto e corsivo
- Codice inline e blocchi di codice
