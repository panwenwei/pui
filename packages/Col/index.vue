<template>
  <div class="p-col" :class="['p-col-'+span]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'p-col',
  props: {
    span: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style lang="less" scoped>

</style>
