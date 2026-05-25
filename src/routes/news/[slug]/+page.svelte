<script>
  export let data;
</script>

<svelte:head>
  <title>{data.title} - La Genuina</title>
  <meta name="description" content="{data.title} - {data.author}, {data.date}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://genuina.rubynetti.it/news/{data.slug}" />
  <meta property="og:title" content="{data.title} | La Genuina" />
  <meta property="og:description" content="{data.author} · {data.date}" />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://genuina.rubynetti.it/news/{data.slug}" />
  <meta property="twitter:title" content="{data.title} | La Genuina" />
  <meta property="twitter:description" content="{data.author} · {data.date}" />
</svelte:head>

<article class="mb-5">
  <figure class="mb-4">
    <span class="corner">{data.corner}</span>
    <img alt="" class="img-fluid" style="min-width: 100%;" src={data.image} />
  </figure>

  <h1 class="mb-2">{data.title}</h1>
  <p class="roboto text-muted mb-4">{data.author} · {data.date}</p>

  {#if data.body}
    <div class="news-body">{@html data.body}</div>
  {:else}
    <p class="text-muted"><em>Articolo in arrivo.</em></p>
  {/if}

  <p class="mt-5">
    <a href="/" class="text-dark">← Torna alla home</a>
  </p>
</article>

<style>
  figure {
    position: relative;
    margin: 0;
  }
  .corner {
    background-color: orange;
    font-family: 'Roboto Condensed', sans-serif;
    color: white;
    position: absolute;
    text-transform: uppercase;
    left: -10px;
    top: -10px;
    padding: 2px 5px;
    z-index: 2;
  }
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>
