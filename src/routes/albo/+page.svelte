<script>
  import Season from './season.svelte'
  import Medagliere from './medagliere.svelte'
  export let data;
  // è necessario copiare l'array per poterlo invertire
  // altrimenti si modificherebbe l'array originale
  const seasons = [...data.seasons].reverse();
</script>

<svelte:head>
  <title>La Genuina - Albo d'Oro</title>
  <meta name="description" content="Medagliere e Albo d'Oro de La Genuina. Scopri tutti i vincitori, le statistiche olimpiche e la storia del fantacalcio più autentico d'Italia." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://genuina.rubynetti.it/albo" />
  <meta property="og:title" content="🏆 Albo d'Oro e Medagliere - La Genuina" />
  <meta property="og:description" content="Medagliere olimpico con ori, argenti e bronzi. Scopri chi sono i campioni del fantacalcio più autentico d'Italia." />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content="https://genuina.rubynetti.it/albo" />
  <meta property="twitter:title" content="🏆 Albo d'Oro e Medagliere - La Genuina" />
  <meta property="twitter:description" content="Medagliere olimpico con ori, argenti e bronzi. Scopri chi sono i campioni del fantacalcio più autentico d'Italia." />
</svelte:head>

<Medagliere seasons={data.seasons} />

<div class="mt-5">
  <h2 class="text-center mb-4">📅 Stagioni per Anno</h2>
  {#each seasons as season(season.year)}
  <Season year={season.year}
      claim={season.claim}
      winner={season.winner}
      images={season.images} />
  {/each}
</div>
