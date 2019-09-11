import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    stocks: {
      BMW: {
        price: 110,
        quantity: 0
      },
      Google: {
        price: 200,
        quantity: 0
      },
      Apple: {
        price: 250,
        quantity: 0
      },
      Twitter: {
        price: 8,
        quantity: 0
      }
    }
  },
  getters: {
    localeFunds: state => {
      return state.funds.toLocaleString();
    },
    stockPurchased: state => {
      let filtered = {};

      Object.keys(state.stocks).forEach(stock => {
        if (state.stocks[stock].quantity > 0) {
          filtered = Object.assign(filtered, {[stock]: state.stocks[stock]})
        }
      })

      return filtered;
    }
  },
  mutations: {},
  actions: {}
});
