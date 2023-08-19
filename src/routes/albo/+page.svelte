<script>
  import Season from './season.svelte'
  export let data;
  // è necessario copiare l'array per poterlo invertire
  // altrimenti si modificherebbe l'array originale
  const seasons = [...data.seasons].reverse();
</script>

<svelte:head>
  <title>La Genuina - Albo d'Oro</title>
</svelte:head>

{#each seasons as season(season.year)}
  <Season year={season.year} 
          claim={season.claim} 
          winner={season.winner} />
{/each}
