const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'user-token'
  }
};

const permissions = ['mall_bargaininfo_add', 'mall_userinfo_get', 'wxmp_wxapp_edit', 'mall_goodsappraises_get', 'mall_ensure_del', 'wxmp_wxmassmsg_add', 'sys_user_edit', 'mall_deliveryplace_add', 'sys_third_party_add', 'mall_orderrefunds_index', 'sys_menu_del', 'wxmp_wxusertags_edit', 'sys_organ_get', 'mall_freighttemplat_add', 'mall_goodscategory_add', 'sys_dict_del', 'mall_orderrefunds_edit', 'mall_pointsrecord_del', 'sys_client_add', 'sys_third_party_index', 'sys_log_index', 'mall_goodsspu_add', 'sys_menu_edit', 'sys_server_index', 'wxmp_wxuser_get', 'sys_user_password', 'wxmp_wxapp_del', 'sys_user_add', 'mall_pointsconfig_get', 'sys_menu_index', 'sys_tenant_get', 'mall_noticeitem_del', 'wxmp_wxmaterial_del', 'mall_couponuser_get', 'wxmp_wxautoreply_del', 'sys_log_del', 'wxmp_wxautoreply_edit', 'mall_goodsappraises_edit', 'sys_client_edit', 'sys_configstorage_get', 'mall_userinfo_edit', 'wxmp_wxuser_add', 'sys_third_party_get', 'wxmp_wxmsg_add', 'mall_userinfo_del', 'mall_goodsspec_edit', 'sys_dict_edit', 'wxmp_wxmsg_index', 'sys_configeditor_edit', 'wxmp_wxmaterial_index', 'mall_orderinfo_edit', 'sys_dict_get', 'mall_userinfo_index', 'sys_role_get', 'mall_goodscategory_get', 'sys_organ_index', 'mall_bargaininfo_get', 'mall_goodsappraises_del', 'mall_orderinfo_index', 'wxmp_wxautoreply_get', 'sys_client_get', 'mall_couponinfo_add', 'mall_goodsspu_get', 'sys_client_index', 'mall_material_edit', 'mall_orderinfo_del', 'sys_tenant_del', 'wxmp_wxmaterial_get', 'mall_freighttemplat_del', 'mall_ensure_get', 'mall_bargainuser_index', 'mall_deliveryplace_del', 'mall_bargaininfo_index', 'wxmp_wxapp_get', 'mall_pointsrecord_get', 'mall_freighttemplat_index', 'mall_material_del', 'mall_ensure_edit', 'mall_goodscategory_index', 'sys_user_get', 'wxmp_wxusertags_list', 'sys_configeditor_get', 'mall_pointsconfig_edit', 'sys_token_index', 'mall_deliveryplace_index', 'wxmp_wxuser_edit', 'wxmp_wxuser_edit_remark', 'mall_noticeitem_edit', 'mall_couponinfo_del', 'mall_pointsrecord_add', 'mall_orderrefunds_get', 'wxmp_wxmassmsg_index', 'sys_role_edit', 'wxmp_wxusertags_add', 'mall_material_add', 'wxmp_wxmassmsg_edit', 'mall_bargaininfo_del', 'sys_token_del', 'mall_bargaininfo_edit', 'mall_goodsspec_add', 'sys_third_party_del', 'sys_role_del', 'mall_orderinfo_get', 'sys_user_del', 'sys_menu_add', 'sys_organ_add', 'wxmp_wxmassmsg_del', 'wxmp_wxmenu_get', 'sys_organ_edit', 'mall_pointsrecord_index', 'wxmp_wxautoreply_index', 'mall_goodsappraises_index', 'mall_noticeitem_add', 'wxmp_wxapp_index', 'mall_noticeitem_index', 'wxmp_wxuser_tagging', 'wxmp_wxmsg_get', 'sys_email_add', 'mall_goodsspu_edit', 'mall_ensure_add', 'mall_pointsrecord_edit', 'sys_client_del', 'mall_deliveryplace_get', 'sys_dict_index', 'wxmp_wxapp_add', 'wxmp_wxmenurule_index', 'wxmp_wxmsg_edit', 'mall_orderinfo_add', 'sys_tenant_edit', 'mall_material_get', 'mall_goodscategory_edit', 'mall_goodsappraises_add', 'sys_organ_del', 'wxmp_wxuser_synchro', 'wxmp_wxmaterial_add', 'wxmp_wxsummary_index', 'wxmp_wxmassmsg_get', 'mall_couponinfo_get', 'mall_material_index', 'wxmp_wxautoreply_add', 'mall_goodsspu_del', 'mall_freighttemplat_get', 'mall_deliveryplace_edit', 'sys_configstorage_edit', 'mall_goodsspec_del', 'sys_dict_add', 'sys_role_add', 'mall_goodscategory_del', 'sys_third_party_edit', 'sys_sms_add', 'mall_couponinfo_index', 'wxmp_wxmenu_add', 'mall_goodsspu_index', 'mall_couponinfo_edit', 'wxmp_wxuser_index', 'sys_user_index', 'mall_goodsspec_index', 'mall_ensure_index', 'sys_tenant_index', 'wxmp_wxmaterial_edit', 'sys_role_perm', 'mall_noticeitem_get', 'sys_menu_get', 'mall_freighttemplat_edit', 'sys_tenant_add', 'wxmp_wxuser_del', 'sys_role_index', 'mall_couponuser_index', 'wxmp_wxmsg_del', 'wxmp_wxusertags_del', 'mall_userinfo_add'];

const roles = [
  {
    'id': 1,
    'name': 'admin'
  },
  {
    'id': 2,
    'name': 'user'
  }
];

const menus = [
  {
    'name': '权限管理',
    'hidden': false,
    'path': '/upms',
    'redirect': 'noRedirect',
    'component': 'Layout',
    'root': true,
    'meta': {
      'title': '权限管理',
      'icon': 'fa-fw fa-user-cog',
      'noCache': false
    },
    'children': [
      {
        'name': 'Menu',
        'meta': {
          'title': '菜单管理',
          'icon': 'fa-fw fa-align-justify',
          'noCache': false
        },
        'path': '/upms/menu',
        'hidden': false,
        'component': '/admin/menu/index',
        'root': false,
        'children': []
      },
      {
        'name': 'Role',
        'meta': {
          'title': '角色管理',
          'icon': 'fa-fw fa-user-lock',
          'noCache': false
        },
        'path': '/upms/role',
        'hidden': false,
        'component': '/admin/role/index',
        'root': false,
        'children': []
      },
      {
        'name': 'User',
        'meta': {
          'title': '用户管理',
          'icon': 'fa-fw fa-user',
          'noCache': false
        },
        'path': '/permission/user',
        'hidden': false,
        'component': '/permission/user',
        'root': false,
        'children': []
      }
    ]
  },
  {
    'name': 'comp',
    'meta': {
      'title': '组件',
      'icon': 'fa-fw fa-th',
      'noCache': false
    },
    'hidden': false,
    'path': '/comp',
    'redirect': 'noRedirect',
    'component': 'Layout',
    'root': true,
    'children': [
      {
        'name': 'basicTable',
        'meta': {
          'title': '简单表格',
          'icon': 'fa-fw fa-table',
          'noCache': false
        },
        'hidden': false,
        'path': '/comp/basicTable',
        'component': '/table/BasicTable',
        'root': false,
        'children': []
      }
    ]
  }
];

const users = {
  'admin-token': {
    sysUser: {
      'id': '1',
      'username': 'Super Admin',
      'email': '88888888@qq.com',
      'password': '$2a$10$vbhPmGL2fmnEDwAlDskgI.1C5ovXtlG5Vs51MocE/O67ni1hJOrDa',
      'createTime': '2019-07-13 15:46:06',
      'updateTime': '2019-12-25 20:21:35',
      'delFlag': '0',
      'lockFlag': '0',
      'phone': '',
      'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      'organId': '3',
      'tenantId': '1',
      'wxOpenid': null,
      'qqOpenid': null,
      'giteeLogin': null,
      'oscId': null
    },
    menus: menus,
    roles: roles,
    permissions: permissions
  },
  'editor-token': {
    sysUser: {
      'id': '2',
      'username': 'Normal Editor',
      'email': '88888888@qq.com',
      'password': '$2a$10$vbhPmGL2fmnEDwAlDskgI.1C5ovXtlG5Vs51MocE/O67ni1hJOrDa',
      'createTime': '2019-07-13 15:46:06',
      'updateTime': '2019-12-25 20:21:35',
      'delFlag': '0',
      'lockFlag': '0',
      'phone': '',
      'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      'organId': '3',
      'tenantId': '1',
      'wxOpenid': null,
      'qqOpenid': null,
      'giteeLogin': null,
      'oscId': null
    },
    menus: menus,
    roles: roles,
    permissions: permissions
  }
};

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        };
      }

      return {
        code: 20000,
        data: token
      };
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query;
      const info = users[token];

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        };
      }

      return {
        code: 20000,
        data: info
      };
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      };
    }
  }
];
