<script
  lang="ts"
>
  import "../app.css";
  import type { Snippet } from "svelte";

  const { children }: {
    children: Snippet;
  } = $props();
</script>

<style
  lang="css"
>
  @import "./+layout.css";
</style>

<div
  class="app"
>
  <main>
    {@render children()}
  </main>
</div>
