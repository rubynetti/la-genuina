<div class="container">
  <Header/>
  <Menu/>
  <div class="row">
    <div class="col"></div>
    <div class="col-lg-6">
      <slot/>
    </div>
    <div class="col"></div>
  </div>

</div>

<script>
  import Header from '$lib/header.svelte';
  import Menu from '$lib/menu.svelte';
  import '../app.css'
</script>