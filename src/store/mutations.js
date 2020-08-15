const {SET_DATA , SET_IS_LOADING_DATA} = require('./types.js');

export const mutations = {
  [SET_DATA](state , payload){
    let xs = state.doc.data;
    state.doc.data = [...xs, ...payload]
  },
  [SET_IS_LOADING_DATA](state , payload){
    state.doc.isLoading = payload;
  }
};