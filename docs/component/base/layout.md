---
title: Layout
---

# 图标

通过基础的 24 分栏，迅速简便地创建布局。


# 基本布局


使用单一分栏创建基础的栅格布局。

<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<style>
  .p-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .p-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<template>
  <p-row>
    <p-col :span="24">
      <div class="grid-content bg-purple-dark"></div>
    </p-col>
  </p-row>
  <p-row>
    <p-col :span="12">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="12">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
  </p-row>
</template>


### 使用
```html
  <p-button>{{button}}</p-button>
  <p-button type="primary">主色</p-button>
  <p-button type="success">成功</p-button>
  <p-button type="info">提示</p-button>
```