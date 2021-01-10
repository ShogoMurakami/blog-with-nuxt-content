<template>
  <article>
    <p>Post last updated: {{ article.updatedAt.slice(0,10) }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>

<style>
  .nuxt-content h1 {
    font-weight: bold;
    font-size: 34px;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
</style>