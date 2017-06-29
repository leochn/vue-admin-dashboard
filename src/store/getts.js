const getters = {
  sidebar: state => state.app.sidebar,
  id: state => state.user.id,
  loginName: state => state.user.loginName,
  username: state => state.user.username,
  email: state => state.user.email,
  auth_type: state => state.user.auth_type,
  avatar: state => state.user.avatar,
  token: state => state.user.token,
  roles: state => state.user.roles
};
export default getters