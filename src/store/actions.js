const {SET_DATA , SET_IS_LOADING_DATA} = require('./types');
const {getGames} = require('../api/index');

export const actions = {
  async GET_DATA({commit}, page){
    commit(SET_IS_LOADING_DATA , true);
    await getGames(page)
      .then(res =>{
        commit(SET_DATA , res);
        setTimeout(() => {
          commit(SET_IS_LOADING_DATA , false);
        }, 1000);
      })
      .catch(err => console.log(err))
  }
};