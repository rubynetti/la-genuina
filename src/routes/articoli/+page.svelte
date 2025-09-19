<script>
  export let data;
</script>

<svelte:head>
  <title>Tutti gli Articoli - La Genuina</title>
  <meta name="description" content="Scopri tutti gli articoli e le news della Genuina, il fantacalcio più autentico d'Italia" />
</svelte:head>

<div class="container mt-4">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Articoli</li>
    </ol>
  </nav>

  <header class="page-header mb-5">
    <h1>Tutti gli Articoli</h1>
    <p class="lead">Le ultime news e storie dalla Genuina</p>
  </header>

  <div class="articles-grid">
    {#each data.articles as article}
      <article class="article-card">
        <a href="/articoli/{article.slug}" class="article-link">
          <div class="article-image-container">
            <span class="article-corner">{article.corner}</span>
            <img
              src={article.image}
              alt={article.title}
              class="article-image"
            />
            <div class="article-overlay">
              <h2 class="article-title">{article.title}</h2>
              <div class="article-meta">
                <span class="article-author">{article.author}</span>
                <span class="article-date">
                  {new Date(article.date).toLocaleDateString('it-IT', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
          {#if article.excerpt}
            <div class="article-excerpt">
              <p>{article.excerpt}</p>
            </div>
          {/if}
        </a>
      </article>
    {/each}
  </div>

  {#if data.articles.length === 0}
    <div class="text-center py-5">
      <h3>Nessun articolo disponibile</h3>
      <p class="text-muted">Gli articoli verranno pubblicati presto!</p>
    </div>
  {/if}
</div>

<style>
  .page-header h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .article-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .article-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .article-image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
  }

  .article-corner {
    background-color: orange;
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    position: absolute;
    text-transform: uppercase;
    left: 10px;
    top: 10px;
    padding: 4px 8px;
    z-index: 2;
    font-size: 0.8rem;
    border-radius: 3px;
  }

  .article-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .article-card:hover .article-image {
    transform: scale(1.05);
  }

  .article-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    color: white;
    padding: 1.5rem;
  }

  .article-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  .article-meta {
    font-family: 'Roboto', sans-serif;
    color: #d6d6d6;
    font-size: 0.9rem;
  }

  .article-author::after {
    content: ' · ';
    margin: 0 0.5rem;
  }

  .article-excerpt {
    padding: 1.5rem;
  }

  .article-excerpt p {
    color: #666;
    margin: 0;
    line-height: 1.6;
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

  @media (max-width: 768px) {
    .articles-grid {
      grid-template-columns: 1fr;
    }

    .page-header h1 {
      font-size: 2rem;
    }
  }
</style>
