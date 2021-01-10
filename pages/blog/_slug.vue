<template>
  <article>
    <div class="container">
      <nuxt-content :document="article" />
    </div>
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
    padding-bottom: 20px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .nuxt-content img {
    width: 255px;
    height: 255px;
  }
</style>