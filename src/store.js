import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foods: [
      {
        name: 'Rijst'
      },
      {
        name: 'Broccoli'
      }
    ]
  },
  mutations: {
    addFood(state, { name }) {
      return {
        ...state,
        foods: [...state.foods, { name }]
      };
    }
  },
  getters: {
    foods(state) {
      return state.foods;
    }
  }
});
