<template>
  <div class="p-row" :style="gutterStyle" :class="[typeFlex,typeJustify]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'p-row',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: ''
    }
  },
  computed: {
    gutterStyle () {
      if (this.gutter === 0) {
        return ''
      }
      var gutterPixel = `-${this.gutter / 2}px`
      return {
        marginLeft: gutterPixel,
        marginRight: gutterPixel
      }
    },
    typeFlex () {
      if (this.type !== '') {
        return 'el-row-flex'
      }
      return ''
    },
    typeJustify () {
      if (this.justify !== '') {
        return 'is-justify-' + this.justify
      }
      return ''
    }
  }
}
</script>
<style lang="less" scoped>

.el-row-flex {
  display: flex;
  &.is-justify-center {
      justify-content: center;
  }
  &.is-justify-end {
      justify-content: flex-end;
  }
  &.is-justify-space-between {
      justify-content: space-between;
  }
  &.is-justify-space-around {
      justify-content: space-around;
  }
  &::after,&::before {
    display: none;
  }
}

.p-row::after {
  display: table;
  content: '';
  clear: both;
}

</style>
