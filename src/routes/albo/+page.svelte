<script>
  import Season from './season.svelte'
  export let data;
</script>

<svelte:head>
  <title>La Genuina - Albo d'Oro</title>
</svelte:head>

{#each data.seasons as season}
  <Season {...season} />
{/each}
