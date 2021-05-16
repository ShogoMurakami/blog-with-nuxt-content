<template>
  <div class="footer-padding">

    <footer class="footer">
      <div class="content has-text-centered">
        <div v-if="this.$route.name !== 'index'">
          <nuxt-link to="/">TOP</nuxt-link><br><br>
        </div>
        <p>
          Created by <nuxt-link to="/profile">Shogo M</nuxt-link>.
        </p>
      </div>
    </footer>
    
  </div>
</template>

<style>

.footer-padding {
  padding-top: 30px;
}

.footer {
  background-color: white;
}

</style>
