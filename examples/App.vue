<template>
  <div id="app">
    <HelloWorld msg="WENWEN ME !"/>
    <div>
      <p-button @click="loadData">load</p-button>
      <p-canvas width="650" height="650" style="border: 1px solid;"></p-canvas>
    </div>
    <div class="nihao"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    HelloWorld
  },
  methods: {
    loadData () {
      console.log('load')
    }
  }
}
</script>

<style lang="less">
.nihaoMixin(){
@function:~`(function(){
  this. wenwen = function (color, index) {
    var isLight = index <= 6;
    return '#cfc';
  }
})()`
}

.nihaoMixin();

.mixin() {
  @bgcolor: #C0C0C0;
}

.nihao {
  .mixin();
  width: 200px;
  height: 200px;
  background: color(~`wenwen('#ccc',1)`);
  background-color: tint(#409eff,50%);
}
</style>
