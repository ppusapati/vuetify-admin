const getters = {
  miniVariant: state => state.app.miniVariant,
  showSettings: state => state.settings.showSettings,
  theme: state => state.settings.theme,
  logo: state => state.settings.logo,
  lang: state => state.settings.lang,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.userInfo.avatar,
  name: state => state.user.userInfo.username,
  roles: state => state.user.roles,
  userInfo: state => state.user.userInfo,
  menus: state => state.user.menus,
  permissions: state => state.user.permissions,
  permission_routes: state => state.permission.routes
};
export default getters;
