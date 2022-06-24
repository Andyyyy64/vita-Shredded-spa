import { createStore } from 'vuex'

export interface State {
  ageinfo: string
  weightinfo: string
  heightinfo: string
  protein: string
  fat: string
  totalkcal: string
  picked: string
  pickedgoal: string
  carbohydrate: string
}

export default createStore<State>({
  state: {
    ageinfo: "",
    weightinfo: "",
    heightinfo: "",
    protein: "",
    carbohydrate: "",
    fat: "",
    totalkcal: "",
    picked: "",
    pickedgoal: "",
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
