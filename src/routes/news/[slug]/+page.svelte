<script>
  export let data;

  const siteUrl = 'https://genuina.rubynetti.it';

  $: canonicalUrl = `${siteUrl}/news/${data.slug}`;
  $: description = `${data.author} · ${data.date}`;
  $: previewImage = data.image ? new URL(data.image, siteUrl).href : `${siteUrl}/cover-1.jpg`;
</script>

<svelte:head>
  <title>{data.title} - La Genuina</title>
  <meta name="description" content="{data.title} - {data.author}, {data.date}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content="{data.title} | La Genuina" />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={previewImage} />
  <meta property="og:image:secure_url" content={previewImage} />
  <meta property="og:image:alt" content={data.title} />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={canonicalUrl} />
  <meta name="twitter:title" content="{data.title} | La Genuina" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={previewImage} />
  <meta name="twitter:image:alt" content={data.title} />
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
