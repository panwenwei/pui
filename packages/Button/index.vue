<template>
  <button
  class="p-button"
  :disabled="disabled"
  :class="[`p-button-${type}`,{
    'is-disabled':disabled
  }]"
  @click="bindClick" type="button"
  >
     <span>
       <slot></slot>
     </span>
  </button>
</template>

<script>
export default {
  name: 'p-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    bindClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.p-button {
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    -webkit-user-select: none;
    -webkit-appearance: none;
    outline: none;
    border: 1px solid #dcdddd;
    background: #fff;
    color: #221e1f;
    padding: 12px 20px;
    font-size: 14px;
    transition: .1s;
    transition: .1s;
    font-weight: 500;
    margin: 0;
  &:focus, &:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }

  // disabled
  &.is-disabled,
  &.is-disabled:focus,
  &.is-disabled:hover {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
  }
}
// 主颜色
.p-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:focus, &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
  // disabled
  &.is-disabled,
  &.is-disabled:active,
  &.is-disabled:focus,
  &.is-disabled:hover {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
  }

}

.p-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:focus, &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
}

.p-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:focus, &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
  &:active {
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }
}

.p-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:focus, &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
}

.p-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  &:focus, &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
}

</style>
