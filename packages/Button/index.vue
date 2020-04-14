<template>
  <button class="p-button">
     <span>
       <slot></slot>
     </span>
  </button>
</template>

<script>
export default {
  name: 'p-button'
}
</script>

<style scoped>
.p-button {
    display: inline-block;
    -webkit-user-select: none;
    outline: none;
    border: none;
    padding: 3px 6px;
    background: #000;
    color: #fff;
}
</style>
