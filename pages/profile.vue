<template>
  <div class="container">
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
            <i class="fas fa-envelope"></i>&nbsp;
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

      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <i class="fab fa-twitter"></i>&nbsp;
                Twitter
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <a href="https://twitter.com/5hogoDev1">@5hogoDev1</a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                <i class="fab fa-github"></i>&nbsp;
                GitHub
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                <a href="https://github.com/ShogoMurakami">@ShogoMurakami</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.container {
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
  font-size: 35px;
  color: #526488;
  word-spacing: 5px;
  padding-top: 20px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>