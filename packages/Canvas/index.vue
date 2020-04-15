<template>
  <canvas class="p-canvas" @click="handleClick" @contextmenu="contextmenu"></canvas>
</template>

<script>
export default {
  name: 'p-canvas',
  methods: {
    contextmenu (e) {
      e.preventDefault()
      return false
    },
    handleClick (e) {
      console.log('click', e)
    }
  }
}
</script>

<style scoped>

</style>
