<template>
  <article>
    <div class="container">
      
      <nuxt-content :document="article" />

      <!--
      <prev-next :prev="prev" :next="next" />
      -->

      <div class="links">
        <nuxt-link to="/" class="button--green">Top</nuxt-link>
      </div>

      <br>

    </div>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
      
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
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 1.8em;
  }
  .nuxt-content img {
    width: 255px;
    height: 255px;
  }
</style>