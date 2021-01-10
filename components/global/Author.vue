<template>
  <div>
    <div>
      <h4>
        Author: <nuxt-link to="/profile">{{ author.name }}</nuxt-link>
      </h4>
      <br>
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