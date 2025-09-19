<svelte:head>
  <title>{data.article.title} - La Genuina</title>
  <meta name="description" content={data.article.excerpt} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://genuina.rubynetti.it/articoli/{data.article.slug}" />
  <meta property="og:title" content="{data.article.title} - La Genuina" />
  <meta property="og:description" content={data.article.excerpt} />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />
  {#if data.article.image}
    <meta property="og:image" content={data.article.image} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://genuina.rubynetti.it/articoli/{data.article.slug}" />
  <meta property="twitter:title" content="{data.article.title} - La Genuina" />
  <meta property="twitter:description" content={data.article.excerpt} />
  {#if data.article.image}
    <meta property="twitter:image" content={data.article.image} />
  {/if}
</svelte:head>

<div class="container mt-4">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Articoli</li>
      <li class="breadcrumb-item active" aria-current="page">{data.article.title}</li>
    </ol>
  </nav>

  <article class="article">
    <header class="article-header">
      <span class="article-corner">{data.article.corner}</span>
      {#if data.article.image}
        <img
          src={data.article.image}
          alt={data.article.title}
          class="article-image img-fluid"
        />
      {/if}
      <div class="article-overlay">
        <h1 class="article-title">{data.article.title}</h1>
        <div class="article-meta">
          <span class="article-author">{data.article.author}</span>
          <span class="article-date">
            {new Date(data.article.date).toLocaleDateString('it-IT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      </div>
    </header>

    <div class="article-content">
      {@html parsedContent}
    </div>
  </article>

  <div class="article-actions mt-5">
    <a href="/" class="btn btn-outline-dark">← Torna alla home</a>
  </div>
</div>

<script>
  import { marked } from 'marked';

  export let data;

  $: parsedContent = marked.parse(data.article.content);
</script>

<style>
  .article {
    max-width: 800px;
    margin: 0 auto;
  }

  .article-header {
    position: relative;
    margin-bottom: 2rem;
  }

  .article-corner {
    background-color: orange;
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    position: absolute;
    text-transform: uppercase;
    left: -10px;
    top: -10px;
    padding: 2px 5px;
    z-index: 3;
  }

  .article-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }

  .article-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 2rem;
    border-radius: 0 0 8px 8px;
  }

  .article-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .article-meta {
    font-family: 'Roboto', sans-serif;
    color: #d6d6d6;
  }

  .article-author::after {
    content: ' · ';
    margin: 0 0.5rem;
  }

  .article-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
  }

  .article-content :global(h1),
  .article-content :global(h2),
  .article-content :global(h3) {
    font-family: 'Roboto Condensed', sans-serif;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .article-content :global(h1) {
    font-size: 2rem;
    border-bottom: 2px solid #333;
    padding-bottom: 0.5rem;
  }

  .article-content :global(h2) {
    font-size: 1.6rem;
    color: #333;
  }

  .article-content :global(h3) {
    font-size: 1.3rem;
  }

  .article-content :global(p) {
    margin-bottom: 1.5rem;
  }

  .article-content :global(blockquote) {
    border-left: 4px solid #333;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 4px;
  }

  .article-content :global(ul),
  .article-content :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  .article-content :global(li) {
    margin-bottom: 0.5rem;
  }

  .breadcrumb {
    background-color: transparent;
    padding: 0;
  }

  .breadcrumb-item a {
    color: #007bff;
    text-decoration: none;
  }

  .breadcrumb-item a:hover {
    text-decoration: underline;
  }
</style>
