<template>
  <i class="pui-icon" :class="'icon-' + name"></i>
</template>
<script>
export default {
  name: 'p-icon',
  props: {
    name: String
  }
}
</script>
<style lang="less">
@import (less) "../style/font/iconfont.less";
</style>
