<div class="container">
  <Header/>
  <Menu/>
  <div>
    <slot></slot>
  </div>
</div>

<script>
  import Header from '$lib/header.svelte';
  import Menu from '$lib/menu.svelte';
  import '../app.css'
</script>