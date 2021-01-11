<template>
  <div class="container-profile">
    <div>
      <h1 class="title">
        Shogo M
      </h1>

      <h3 class="subtitle">
        Hello, I am a developer.
      </h3>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Email
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            shogo-dev@protonmail.com
          </div>
        </div>
      </div>

      <br>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            GitHub
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <a href="https://github.com/ShogoMurakami">@ShogoMurakami</a>
          </div>
        </div>
      </div>

      <br><br>

      <div class="links">
        <nuxt-link to="/" class="button--green">Top</nuxt-link>
      </div>

    </div>
  </div>
</template>

<style>

.container-profile {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 280;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-top: 20px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>