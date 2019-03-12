import Cookies from 'js-cookie'
import {authentications} from '../../service'
const login = {
  // 注意一定要添加 namespaced
  namespaced: true,
  state: {
    // device: 'desktop',
    userInfo: {
      token: '',
      userName: '',
      passWord: ''
    }
  },
  mutations: {
    SET_USERINFO: (state, data) => {
      Cookies.set('userInfo', data)
      state.userInfo = data
    }
  },
  actions: {
    // 用户登录
    async LOGIN({
      commit
    }, param) {
      const {data, errcode} = await authentications(param)
      if (errcode) {
        return
      } else {
        const {access_token, expires_in, token_type} = data
        // 根据接口返回结果，设置 token 过期时间
        const expires_time = (Date.now() + expires_in * 1000)
        const userInfo = {
          access_token,
          expires_time,
          token_type
        }
        commit('SET_USERINFO', userInfo);
      }

    }
  }
}

export default login
