<template>
  <div>
    <div>
      <h4 class="author-style">
        Author: <nuxt-link to="/profile">{{ author.name }}</nuxt-link>
      </h4>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>

.author-style {
  font-family: 'Fraunces', serif;
  font-size: 17px;
}


</style>