<script
  lang="ts"
>
  import type { PageProps } from "./$types.js";

  const { data } = $props() as PageProps,
    { content } = data as PageProps["data"];
</script>

<svelte:head>
  <title>Redirection | Doc</title>
  <meta
    name="description"
    content="Redirection | Doc"
  />
</svelte:head>

<section>
  <h1>
    {content}
  </h1>
</section>
