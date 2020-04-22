---
title: Input
---

# 输入框

通过鼠标或键盘输入字符

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
  <p-button>{{button}}</p-button>
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

## 禁用状态

按钮不可用状态。

<template>
  <p-button disabled>{{button}}</p-button>
  <p-button type="primary" disabled>主色按钮</p-button>
  <p-button type="success" disabled>成功按钮</p-button>
  <p-button type="info"    disabled>提示按钮</p-button>
  <p-button type="warning" disabled>警告按钮</p-button>
  <p-button type="danger"  disabled>危险按钮</p-button>
</template>

### 使用

> 使用 **disabled**、 属性来定义按钮是否可用，它接受一个Boolean值。

```html
  <p-button disabled>{{button}}</p-button>
  <p-button type="primary" disabled>主色按钮</p-button>
  <p-button type="success" disabled>成功按钮</p-button>
  <p-button type="info"    disabled>提示按钮</p-button>
  <p-button type="warning" disabled>警告按钮</p-button>
  <p-button type="danger"  disabled>危险按钮</p-button>
```