<script>
export let data;
</script>

<svelte:head>
  <title>{data.year} - Albo d'oro</title>
  <meta name="description" content="Stagione {data.year} de La Genuina. Vincitore: {data.winner}. Scopri classifica, ricordi e il premio sfiga di questa stagione del fantacalcio più autentico d'Italia." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://genuina.rubynetti.it/albo/{data.year}" />
  <meta property="og:title" content="🏆 Stagione {data.year} - Vincitore: {data.winner} | La Genuina" />
  <meta property="og:description" content="Stagione {data.year}: {data.claim} - Vincitore: {data.winner}. Scopri tutti i dettagli di questa stagione del fantacalcio più autentico d'Italia." />
  <meta property="og:site_name" content="La Genuina" />
  <meta property="og:locale" content="it_IT" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content="https://genuina.rubynetti.it/albo/{data.year}" />
  <meta property="twitter:title" content="🏆 Stagione {data.year} - Vincitore: {data.winner} | La Genuina" />
  <meta property="twitter:description" content="Stagione {data.year}: {data.claim} - Vincitore: {data.winner}. Scopri tutti i dettagli di questa stagione del fantacalcio più autentico d'Italia." />
  <meta property="twitter:image" content="https://genuina.rubynetti.it/cover-1.jpg" />
</svelte:head>

<div style="position: relative" class="text-center mb-5">
  <h2 class="my-5 d-inline">{data.year}</h2>
</div>

<div class="mb-5">
  <h3 class="roboto-condensed">Classifica finale</h3>
  <ol class="p-0">
    {#each data.rank as data}
    <li>{data.mister} {#if data.team} · {data.team}{/if}</li>
    {/each}
  </ol>
</div>

{#if data.sfiga != undefined}
<div class="mb-5">
  <h3 class="roboto-condensed">Premio Sfiga</h3>
  <p>{data.sfiga?.mister} · {data.sfiga?.reason}</p>
</div>
{/if}


<div class="mb-5">
  <h3 class="roboto-condensed">Presidente</h3>
  <p>{data.presidente}</p>
</div>

<div class="mb-5">
  <h3 class="roboto-condensed">Ricordi</h3>
  {#each data.memories as data}
  <p>{data}</p>
  {/each}
</div>

<style>
  h2 {
    font-family: 'Ruwudu', sans-serif;
  }
  h2::before {
    content: "꧁";
    font-size: 1rem;
    position: relative;
    top: -13px;
    left: -2px
  }
  h2::after {
    content: "꧂";
    font-size: 1rem;
    position: relative;
    top: -13px;
    right: -2px
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
  }
</style>