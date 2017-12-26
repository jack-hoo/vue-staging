import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import {login} from '../api/login'
import {setUserInfo, getUserInfo, getToken, setToken} from '../utils/auth'

Vue.use(Vuex)

//应用初始状态
const state = {
  token: getToken(),
  userInfo: getUserInfo()
}
// 定义所需的 mutations
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}
const actions = {
  Login({commit}, userInfo) {
    return new Promise((resolve, reject) => {
      const username = userInfo.username.trim();
      login(username, userInfo.password).then(response => {
        let roles = []
        let roleList = response.data.roles
        for (let i = 0; i < roleList.length; i++) {
          let role = {
            roleId: roleList[i].roleId,
            roleName: roleList[i].roleName
          }
          roles.push(role)
        }
        let userInfo = {
          userId: response.data.userid,
          username: response.data.username,
          avatar: response.data.avartar,
          roles: roles
        }
        setToken(response.data.token)
        setUserInfo(userInfo)
        commit('SET_TOKEN', response.data.token);
        commit('SET_USERINFO', userInfo);
        resolve();
      }).catch(error => {
        console.log(error)
        reject(error);
      });
    });
  },
}
// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
