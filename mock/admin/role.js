const data = [
  {
    'id': '1',
    'tenantId': '1',
    'roleName': '管理员',
    'roleCode': 'ROLE_ADMIN',
    'roleDesc': '管理员',
    'dsType': 0,
    'dsScope': '',
    'createTime': '2017-10-29 15:45:51',
    'updateTime': '2019-07-27 12:06:49',
    'delFlag': '0'
  },
  {
    'id': '3',
    'tenantId': '1',
    'roleName': 'test',
    'roleCode': 'test',
    'roleDesc': '可看到【公众号+小程序商场版】所有功能',
    'dsType': 0,
    'dsScope': '3,4',
    'createTime': '2019-03-30 17:44:20',
    'updateTime': '2019-07-18 15:01:23',
    'delFlag': '0'
  },
  {
    'id': 'f546ee69affe036f3f8ce625e873904f',
    'tenantId': '1',
    'roleName': 'test2',
    'roleCode': 'test2',
    'roleDesc': '可看到【公众号版】所有功能',
    'dsType': 0,
    'dsScope': '',
    'createTime': '2019-12-29 18:38:51',
    'updateTime': null,
    'delFlag': '0'
  }
];

const tableData = {
  'code': 0,
  'msg': null,
  'data': {
    'records': [
      {
        'id': '1',
        'tenantId': '1',
        'roleName': '管理员',
        'roleCode': 'ROLE_ADMIN',
        'roleDesc': '管理员',
        'dsType': 0,
        'dsScope': '',
        'createTime': '2017-10-29 15:45:51',
        'updateTime': '2019-07-27 12:06:49',
        'delFlag': '0'
      },
      {
        'id': '3',
        'tenantId': '1',
        'roleName': 'test',
        'roleCode': 'test',
        'roleDesc': '可看到【公众号+小程序商场版】所有功能',
        'dsType': 0,
        'dsScope': '3,4',
        'createTime': '2019-03-30 17:44:20',
        'updateTime': '2019-07-18 15:01:23',
        'delFlag': '0'
      }, {
        'id': 'f546ee69affe036f3f8ce625e873904f',
        'tenantId': '1',
        'roleName': 'test2',
        'roleCode': 'test2',
        'roleDesc': '可看到【公众号版】所有功能',
        'dsType': 0,
        'dsScope': '',
        'createTime': '2019-12-29 18:38:51',
        'updateTime': null,
        'delFlag': '0'
      }
    ],
    'total': 3,
    'size': 10,
    'current': 1,
    'orders': [],
    'searchCount': true,
    'pages': 1
  },
  'ok': true
};

export default [
  {
    url: 'admin/role/page\.*',
    type: 'get',
    response: config => {
      return tableData;
    }
  },
  {
    url: 'admin/role/list\.*',
    type: 'get',
    response: config => {
      return data;
    }
  }
];
