module.exports = {
  title:'TEST',
  themeConfig: {
    nav: [
      { text: '主页', link: '/'},
      { text: '组件', link: '/component/guide/introduction'}
    ],
    sidebar: {
      '/component/': [
        {
          title:'指南',
          collapsable: false,
          children: [
            'guide/introduction',
            'guide/guide'
          ]
        },
        {
          title:'基本组件',
          collapsable: false,
          children: [
            'base/layout',
            'base/button',
            'base/icon',
          ]
        }
      ]
    }
  }
}
