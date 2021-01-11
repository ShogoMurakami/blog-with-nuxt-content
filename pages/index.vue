<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">5hogo's blog</h1>
          <img src="../assets/dog.jpg">
        </div>
        <div class="column">
          <ul>
            <li v-for="article of articles" :key="article.slug">
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      {{ article.title }}
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      Author: {{ article.author.name }}. 
                      Post created: <time>{{ article.createdAt.slice(0,10) }}</time>
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style>

.container {
  padding-top: 50px;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
