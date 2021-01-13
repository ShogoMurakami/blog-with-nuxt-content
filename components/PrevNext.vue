<template>
  <div class="flex justify-between">
    <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
      <a class="pagination-previous">
        <NuxtLink
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          class="text-primary font-bold hover:underline"
        >
          Previous: {{ prev.title }}
        </NuxtLink>
      </a>
      <a class="pagination-next">
        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          class="font-bold hover:underline"
        >
          Next page: {{ next.title }}
        </NuxtLink>
      </a>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>