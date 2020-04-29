---
title: Input
---

# 输入框

基础用法

<script>
export default {
  data() {
    return {
      input: '请输入内容'
    }
  }
}
</script>

## 基础用法

基础的按钮用法。

<template>
  <p-button>{{input}}</p-button>
  <p-button type="primary">主色按钮</p-button>
  <p-button type="success">成功按钮</p-button>
  <p-button type="info">提示按钮</p-button>
  <p-button type="warning">警告按钮</p-button>
  <p-button type="danger">危险按钮</p-button>
</template>


### 使用

> 使用 **type**、 属性来定义 Button 的样式。

```html
  <p-button>默认按钮</p-button>
  <p-button type="primary">主色按钮</p-button>
  <p-button type="success">成功按钮</p-button>
  <p-button type="info">提示按钮</p-button>
  <p-button type="warning">警告按钮</p-button>
  <p-button type="danger">危险按钮</p-button>
```
