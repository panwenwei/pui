---
title: Layout
---

# 图标

通过基础的 24 分栏，迅速简便地创建布局。


## 基本布局


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

<style lang="less" >
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
  <p-row>
    <p-col :span="8">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="8">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
    <p-col :span="8">
      <div class="grid-content bg-purple"></div>
    </p-col>
  </p-row>
  <p-row>
    <p-col :span="6">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
    <p-col :span="6">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
  </p-row>
  <p-row>
    <p-col :span="4">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
    <p-col :span="4">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
    <p-col :span="4">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
  </p-row>
</template>


### 使用

```html
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
  <p-row>
    <p-col :span="8">
      <div class="grid-content bg-purple"></div>
    </p-col>
    <p-col :span="8">
      <div class="grid-content bg-purple-light"></div>
    </p-col>
    <p-col :span="8">
      <div class="grid-content bg-purple"></div>
    </p-col>
  </p-row>
  </p-row>
```

## 分栏间隔

分栏之间存在间隔。

> Row 组件 提供 **gutter** 属性来指定每一栏之间的间隔，默认间隔为 0。

<template>
  <p-row :gutter="20">
    <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
</template>

### 使用 

```html
    <p-row :gutter="20">
      <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
      <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
      <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
      <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
    </p-row>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<template>
  <p-row :gutter="20">
    <p-col :span="16"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="8"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="8"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="8"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="16"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
</template>

### 使用 

```html
  <p-row :gutter="20">
    <p-col :span="16"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="8"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="8"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="8"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="16"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="4"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
```


## 分栏偏移

支持偏移指定的栏数。

> 通过制定 col 组件的 **offset** 属性可以指定分栏偏移的栏数。

<template>
  <p-row :gutter="20">
    <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
</template>

### 使用 

```html
  <p-row :gutter="20">
    <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></p-col>
    <p-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
  <p-row :gutter="20">
    <p-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></p-col>
  </p-row>
```

## 对齐方式

通过 flex 布局来对分栏进行灵活的对齐。

> 将 type 属性赋值为 ***flex***，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

<template>
  <p-row type="flex" class="row-bg">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="center">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="end">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="space-between">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="space-around">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
</template>

### 使用 

```html
<p-row type="flex" class="row-bg">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="center">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="end">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="space-between">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
<p-row type="flex" class="row-bg" justify="space-around">
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple-light"></div></p-col>
  <p-col :span="6"><div class="grid-content bg-purple"></div></p-col>
</p-row>
```