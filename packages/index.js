
import PButton from './Button'
import Canvas from './Canvas'

const components = [
  PButton,
  Canvas
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  PButton
}
