---
title: Icon
---

# 图标
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <p-button>{{button}}</p-button>
  <p-button type="primary">主色</p-button>
  <p-button type="success">成功</p-button>
  <p-button type="info">提示</p-button>
</template>


### 使用
```html
  <p-button>{{button}}</p-button>
  <p-button type="primary">主色</p-button>
  <p-button type="success">成功</p-button>
  <p-button type="info">提示</p-button>
```