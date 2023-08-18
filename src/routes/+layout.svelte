<div class="container">
  <Header/>
  <div class="mb-5 text-center">
      <a href="/" class="text-dark text-uppercase fw-bold">Home</a>
      <div class="d-none">·</div>
      <div class="d-none"><a href="/la-genuina" class="text-dark text-uppercase fw-bold">Archivio</a></div>
      ·
      <a href="/albo" class="text-dark text-uppercase fw-bold">Albo d'Oro</a>
  </div>
  <div>
    <slot></slot>
  </div>
</div>

<script>
  import Header from '$lib/header.svelte';
</script>