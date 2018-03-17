<template>
  <Loading v-if='loading' />
  <div v-else>
    <Nav />
    <div class='concept'>
      <h1>{{ hello }}</h1>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Nav from '@/components/Nav'

export default {
  name: 'Concept',
  components: { Loading, Nav },
  data () {
    return {
      loading: false,
      hello: 'Contact me here!'
    }
  },
  mounted () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
</script>

<style scoped>
.concept {
  padding-top: 100px;
}
</style>
