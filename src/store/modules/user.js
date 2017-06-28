//import { loginByEmail, logout, getInfo } from 'api/login';
import Cookies from 'js-cookie';

const user = {
  state: {
    id: '',
    loginName:'',
    username: '',
    email: '',
    auth_type: '',
    avatar: '', //头像
    token: Cookies.get('Admin-Token'),
    roles: []
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = id;
    },
    SET_LOGINNAME: (state, loginName) => {
      state.loginName = loginName;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    },
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    }
  },

  actions: {

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // getInfo(state.token).then(response => {
        //   const data = response.data;
        //   commit('SET_ROLES', data.role);
        //   commit('SET_USERNAME', data.username);
        //   commit('SET_AVATAR', data.avatar);
        //   commit('SET_ID', data.id);
        //   commit('SET_INTRODUCTION', data.introduction);
        //   resolve(response);
        // }).catch(error => {
        //   reject(error);
        // });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('SET_TOKEN', '');
        //   commit('SET_ROLES', []);
        //   Cookies.remove('Admin-Token');
        //   resolve();
        // }).catch(error => {
        //   reject(error);
        // });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        Cookies.remove('Admin-Token');
        resolve();
      });
    }

  }
};

export default user;
