<template>
  <div class="p-col" :class="['p-col-'+span,offsetClass]" :style="gutterStyle">
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
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    gutterStyle () {
      var gutter = this.$parent.$props.gutter
      if (gutter === 0) return ''
      var gutterPixel = `${gutter / 2}px`
      return {
        paddingLeft: gutterPixel,
        paddingRight: gutterPixel
      }
    },
    offsetClass () {
      if (this.offset !== 0) {
        return 'p-col-offset-' + this.offset
      }
      return ''
    }
  }
}
</script>
<style lang="less" scoped>
.col-loop(@counter) when (@counter>0){
    &.p-col-@{counter}{
        width:@counter/24*100%;
    }
    &.p-col-offset-@{counter}{
        margin-left:@counter/24*100%;
    }
    .col-loop((@counter)-1);
}

.p-col {
  float: left;
  box-sizing: border-box;
  .col-loop(24);
}

</style>
