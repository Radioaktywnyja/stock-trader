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
    },
    savedData: {}
  },
  getters: {
    localeFunds: state => {
      return state.funds.toLocaleString();
    },
    stockPurchased: state => {
      let filtered = {};

      Object.keys(state.stocks).forEach(stock => {
        if (state.stocks[stock].quantity > 0) {
          filtered = Object.assign(filtered, { [stock]: state.stocks[stock] });
        }
      });

      return filtered;
    }
  },
  mutations: {
    buyStock: (state, payload) => {
      if (state.funds >= (payload.quantity * state.stocks[payload.name].price)) {
        state.stocks[payload.name].quantity += payload.quantity;
        state.funds -= (payload.quantity * state.stocks[payload.name].price);
      }
    },
    sellStock: (state, payload) => {
      if (state.stocks[payload.name].quantity >= payload.quantity) {
        state.stocks[payload.name].quantity -= payload.quantity;
        state.funds += payload.quantity * state.stocks[payload.name].price;
      }
    },
    changePrices: state => {
      Object.keys(state.stocks).forEach(stock => {
        let curr = state.stocks[stock].price;
        let max = Math.round(curr + (40 * curr) / 100);
        let min = Math.round(curr - (40 * curr) / 100);
        state.stocks[stock].price = Math.round(Math.random() * (max - min + 1)) + min;
      });
    },
    saveData: state => {
      state.savedData.funds = state.funds;
      state.savedData.stocks = JSON.parse(JSON.stringify(state.stocks));
    },
    loadData: state => {
      state.funds = state.savedData.funds;
      state.stocks = JSON.parse(JSON.stringify(state.savedData.stocks));
    }
  },
  actions: {
    buyStock: ({ commit }, payload) => {
      commit("buyStock", payload);
    },
    sellStock: ({ commit }, payload) => {
      commit("sellStock", payload);
    },
    changePrices: ({ commit }) => {
      commit("changePrices");
    },
    saveData: ({ commit }) => {
      commit("saveData");
    },
    loadData: ({ commit }) => {
      commit("loadData");
    }
  }
});
