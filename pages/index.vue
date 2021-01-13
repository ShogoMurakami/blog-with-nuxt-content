<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">5hogo's blog</h1>
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
                      Author: {{ article.author.name }} ・
                      <time>{{ article.createdAt.slice(0,10) }}</time>
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
  padding-top: 30px;
  padding-bottom: 30px;
}

.title {
  font-family: 'Fraunces', serif;
  display: block;
  font-weight: 280;
  font-size: 60px;
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

.content {
  font-family: 'Fraunces', serif;
}

</style>
