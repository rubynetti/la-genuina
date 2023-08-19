<script>
  export let year
  export let winner
  export let claim
</script>

<div class="mb-4">
<div class="card mb-2">
  <div class="card-body">
    <div class="row">
      <div class="col">
        {year}
      </div>
      <div class="col text-center">
        <strong>{winner}</strong>
      </div>
      <div class="col text-end">
        <a href="/albo/{year}" class="text-dark">
          <span>Scopri di più</span>
        </a>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="text-center"><em>{claim}</em></div>
  </div>
</div>
</div>