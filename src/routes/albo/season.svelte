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
      <a href="/albo/{year}" class="thumbs">
        {#each images as img}
          <img src={img} alt={`Premi stagione ${year}`} />
        {/each}
      </a>
    {/if}
  </div>
  <div class="card-footer">
    <div class="text-center"><em>{claim}</em></div>
  </div>
</div>
</div>

<style>
  .thumbs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 0.75rem;
  }
  .thumbs img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .thumbs:hover img {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
</style>