import {
    defineNuxtPlugin
} from '#app'

import Divider from 'primevue/divider/divider.esm.js'
import PrimeVue from 'primevue/config/config.esm.js'

export default defineNuxtPlugin( ( nuxtApp ) => {
    nuxtApp.vueApp.use( PrimeVue, {
        ripple: true
    } )
    nuxtApp.vueApp.component( 'Divider', Divider )
} )