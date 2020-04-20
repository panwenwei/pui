<template>
  <i :class="'p-icon-' + name"></i>
</template>
<script>
export default {
  name: 'p-icon',
  props: {
    name: String
  }
}
</script>
