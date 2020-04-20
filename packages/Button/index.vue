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

<style lang="less" >
@import  "../style/index.less";
@btn-prefix: ~"@{prefix}button";
.btn-color(@color, @percent: 10%) {
  background-color: @color;
  border-color: darken(@color, 2%);
  color: @white;
  &:hover {
    border-color: lighten(@color, @percent);
    background-color: lighten(@color, @percent);
  }
  &:active {
    border-color: darken(@color, 8%);
    background-color: darken(@color, 8%);
  }
  &.is-disabled,
  &.is-disabled:active,
  &.is-disabled:focus,
  &.is-disabled:hover {
      color: @white;
      background-color: tint(@color,60%);
      border-color: tint(@color,60%);
  }

}
.@{btn-prefix} {
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    -webkit-user-select: none;
    -webkit-appearance: none;
    outline: none;
    border: 1px solid #dcdddd;
    background: @white;
    background-color: @white;
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

  &.@{btn-prefix} {
     // 主颜色
     &-primary {
      .btn-color(@primary-color);
    }
    // 成功色
    &-success {
      .btn-color(@success-color);
    }

    // info色
    &-info {
      .btn-color(@info-color);
    }

    // warning色
    &-warning {
      .btn-color(@warning-color);
    }

    // error
    &-danger {
      .btn-color(@error-color);
    }
  }
}

</style>
