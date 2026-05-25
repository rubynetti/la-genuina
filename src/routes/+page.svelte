<svelte:head>
  <title>La Genuina - Home</title>
  <meta name="description" content="La Genuina - Il fantacalcio più autentico d'Italia. Scopri l'albo d'oro, le news e tutte le storie della nostra lega." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://genuina.rubynetti.it/" />
  <meta property="og:title" content="La Genuina - Il fantacalcio più autentico d'Italia" />
  <meta property="og:description" content="La Genuina - Il fantacalcio più autentico d'Italia. Scopri l'albo d'oro, le news e tutte le storie della nostra lega." />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content="https://genuina.rubynetti.it/" />
  <meta property="twitter:title" content="La Genuina - Il fantacalcio più autentico d'Italia" />
  <meta property="twitter:description" content="La Genuina - Il fantacalcio più autentico d'Italia. Scopri l'albo d'oro, le news e tutte le storie della nostra lega." />
</svelte:head>

{#each data.news as item (item.slug)}
  <a href="/news/{item.slug}" class="news-link">
    <BigNews
      title={item.title}
      author={item.author}
      corner={item.corner}
      date={item.date}
      image={item.image}
    />
  </a>
{/each}

<script>
  import BigNews from "$lib/big_news.svelte";
  export let data;
</script>

<style>
  .news-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }
</style>
