<template>
  <div class='concept'>
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Concept',
  data () {
    return {
      hello: 'This about John'
    }
  }
}
</script>

<style scoped>
.concept {
  padding-top: 100px;
}
</style>
