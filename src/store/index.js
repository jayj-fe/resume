import { createStore } from "vuex";

import state from './states.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default createStore({
  state,
  getters,
  actions,
  mutations
})
