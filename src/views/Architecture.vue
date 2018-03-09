<template>
  <div class='architecture'>
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Architecture',
  data () {
    return {
      hello: 'These are john\'s architectural design projects'
    }
  }
}
</script>

<style scoped>
.architecture {
  padding-top: 100px;
}
</style>
