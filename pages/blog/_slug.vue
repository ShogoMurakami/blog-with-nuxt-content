<template>
  <article>
    <div class="container is-max-widescreen">

      <div class="tile is-ancestor">
        <div class="tile is-parent is-8">
          <article class="tile is-child box">
            <nuxt-content :document="article" />
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title-slug">Author:</p>
            <p class="subtitle-slug">
              <nuxt-link to="/profile">Shogo M</nuxt-link>
            </p>
            <div class="content">
              <p>Developer. Human.</p>
            </div>
          </article>
        </div>
      </div>
      
      <prev-next :prev="prev" :next="next" />

      <br>

      <div class="links">
        <nuxt-link to="/" class="button--grey">Top</nuxt-link>
      </div>

      <br><br>
    
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

  .title-slug {
    font-family: 'Fraunces', serif;
    display: block;
    font-weight: 280;
    font-size: 38px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle-slug {
    font-weight: 300;
    font-size: 30px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .nuxt-content h1 {
    font-weight: bold;
    font-size: 34px;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 26px;
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
    width: 275px;
    height: 275px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>