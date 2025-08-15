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
</svelte:head>

<Medagliere seasons={data.seasons} />

<div class="mt-5">
  <h2 class="text-center mb-4">📅 Stagioni per Anno</h2>
  {#each seasons as season(season.year)}
    <Season year={season.year}
            claim={season.claim}
            winner={season.winner} />
  {/each}
</div>
