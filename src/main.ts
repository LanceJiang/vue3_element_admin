import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// element plus
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// 注册全局组件
import { registerGlobComp } from '@/components/registerGlobComp'
// 注册全局directive
import { setupGlobDirectives } from '@/directive'
import '@/permission'

// 引入svg注册脚本
import 'virtual:svg-icons-register'
// 加载admin-svg icon
;(function () {
	const d = document
	// const existIconVersion = [...d.querySelectorAll('.ad-icon_svg')].map(v => v.getAttribute('version')).includes(version)
	const existIconVersion = false
	if (!existIconVersion) {
		/** update 最新 iconfont(.css && .js) */
		/* todo delete Start */
		const origin_prefix_ = '//at.alicdn.com/t/c/font_4091949_vvz6zn4y5l'
		const link_ = d.createElement('link')
		link_.rel = 'stylesheet'
		link_.type = 'text/css'
		link_.className = 'ad-icon_iconfont'
		link_.href = `${origin_prefix_}.css`
		d.getElementsByTagName('head')[0].appendChild(link_)
		const s_ = d.createElement('script')
		s_.className = 'ad-icon_svg'
		s_.src = `${origin_prefix_}.js`
		d.getElementsByTagName('head')[0].appendChild(s_)
		/* todo delete End */
		const origin_prefix = '//at.alicdn.com/t/c/font_4091949_1g37iqlkjlq'
		const link = d.createElement('link')
		link.rel = 'stylesheet'
		link.type = 'text/css'
		link.className = 'ad-icon_iconfont'
		// link.setAttribute('version', version)
		// link.setAttribute('origin', location.origin)
		link.href = `${origin_prefix}.css`
		d.getElementsByTagName('head')[0].appendChild(link)
		const s = d.createElement('script')
		s.className = 'ad-icon_svg'
		s.src = `${origin_prefix}.js`
		// s.setAttribute('version', version)
		// s.setAttribute('origin', location.origin)
		d.getElementsByTagName('head')[0].appendChild(s)
	}
})()
// 国际化
import i18n from '@/lang/index'
// pinia store
import pinia from '@/store/createPinia'
// 自定义样式
import '@/styles/index.scss'
import { $log } from '@/utils'

const app = createApp(App)
// 注册全局组件
registerGlobComp(app)
// 注册全局自定义指令
setupGlobDirectives(app)
// 全局方法
app.config.globalProperties.$log = $log
// 注册全局组件
app.use(router).use(ElementPlus).use(i18n).use(pinia).mount('#app')
