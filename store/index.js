import axios from 'axios'

const state = () => ({
  users : [],
  searchValue : ''
})

const mutations = {
  SET_CONTENT: (state, users) => {
       return state.users = users;
    },

    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    }

}

const actions = {
    GET_USER_FROM_API({commit}) {
        return axios('https://jsonplaceholder.typicode.com/posts', {
          method: "GET"
        })
          .then((users) => {
            commit('SET_CONTENT', users.data);
            return users;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
      },
      GET_SEARCH_VALUE({commit}, value) {
        commit('SET_SEARCH_VALUE', value);
      }
}

const getters = {
    USER: (state) => {
        return state.users;
    },
    SEARCH_VALUE: (state) => {
      return state.searchValue;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}