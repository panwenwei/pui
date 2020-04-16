<template>
  <button class="p-button"  :class="`p-button-${type}`" @click="bindClick" type="button">
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
    }
  },
  methods: {
    bindClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.p-button {
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    -webkit-user-select: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    border: 1px solid #dcdddd;
    background: #fff;
    color: #221e1f;
    padding: 12px 20px;
    font-size: 14px;
    transition: .1s;
    transition: .1s;
    font-weight: 500;
    margin: 0;
}

.p-button:focus, .p-button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}

.p-button:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
}
</style>
