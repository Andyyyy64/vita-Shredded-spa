import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    [x: string]: number
    moderateactivity: number
    heightinfo: number
    ageinfo: number
    weightinfo: number
    totalkcal: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}