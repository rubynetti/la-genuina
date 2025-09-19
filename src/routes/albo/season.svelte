<script>
  export let year
  export let winner
  export let claim

    export let images = [];
</script>

<div class="mb-4">
<div class="card mb-2">
  <div class="card-body">
    <div class="row">
      <div class="col">
        {year}
      </div>
      <div class="col text-center" style="font-size: 2em">
        <strong>{winner}</strong>
      </div>
      <div class="col text-end">
        <a href="/albo/{year}" class="text-dark">
          <span>Scopri di più</span>
        </a>
      </div>
    </div>
    {#if images && images.length}
      <div class="text-center mt-3">
        {#each images as img}
          <img src={img} alt={`Premi stagione ${year}`} style="max-width:100%;height:auto;border-radius:8px;box-shadow:0 2px 8px #0002;margin-bottom:1rem;" />
        {/each}
      </div>
    {/if}
  </div>
  <div class="card-footer">
    <div class="text-center"><em>{claim}</em></div>
  </div>
</div>
</div>