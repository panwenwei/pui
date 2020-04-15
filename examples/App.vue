<template>
  <div id="app">
    <HelloWorld msg="WENWEN ME !"/>
    <div>
      <p-button @click="loadData">load</p-button>
      <p-canvas width="650" height="650" style="border: 1px solid;"></p-canvas>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    HelloWorld
  },
  methods: {
    loadData () {
      console.log('load')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
