<script>
  export let year
  export let winner
  export let claim

    export let image;
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
    {#if image}
      <div class="text-center mt-3">
        <img src={image} alt={`Premi stagione ${year}`} style="max-width:100%;height:auto;border-radius:8px;box-shadow:0 2px 8px #0002;" />
      </div>
    {/if}
  </div>
  <div class="card-footer">
    <div class="text-center"><em>{claim}</em></div>
  </div>
</div>
</div>