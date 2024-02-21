import EN from './en'
import CN from './cn'
import JP from './jp'
import KR from './kr'
import { createI18n } from 'vue-i18n'
import { useGlobalState } from '@/store'

const state = useGlobalState()

const message = {
    cn: CN,
    en: EN,
    jp: JP,
    kr: KR
}

const i18n = createI18n({
    locale: state.value.language, // 设置语言类型
    legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
    globalInjection: true, // 全局注册$t方法
    messages: message,
})

export default i18n
