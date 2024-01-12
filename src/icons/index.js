// 1.导入所有的svg图标
// 2.完成SvgIcon的全局注册
import SvgIcon from '@/components/SvgIcon'

const svgRequire = require.context('./svg', false, /\.svg/)
// 此时返回一个require的函数，可以接受一个request的参数，用于require的导入
// 该函数提供三个属性，可以通过require.keys()获取到所有的svg图标
// 便利图标，把图标作为request传入到reuire导入函数中，完成本地svg图标的导入
svgRequire.keys().forEach((SvgIcon) => svgRequire(SvgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
