<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12">
        <v-btn class="ma-1" small color="primary">
          <v-icon dark dense>fa-plus</v-icon>
        </v-btn>
        <v-btn class="ma-1" small color="error" :disabled="!active[0] || (!!active[0] && Array.isArray(active[0].children) && active[0].children.length > 0)" @click="handleRemove">
          <v-icon dark dense>fa-minus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-treeview
          :items="items"
          dense
          open-all
          transition
          rounded
          :active.sync="active"
          return-object
          item-key="id"
          item-text="title"
          activatable
        >
          <template v-slot:prepend="{ item, open }">
            <v-icon v-if="item.type === 'catalog'" dense>
              {{ open ? 'fa-folder-open' : 'fa-folder' }}
            </v-icon>
            <v-icon v-else dense>
              {{ typeIcons[item.type] }}
            </v-icon>
          </template>
          <template v-slot:label="{ item }">
            <template v-if="$te(item.name)">
              {{ $t(item.name) }}
            </template>
            <template v-else>
              {{ item.title }}
            </template>
          </template></v-treeview>
      </v-col>
      <v-col>
        <v-card
          class="mx-auto"
        >
          <v-card-title color="primary darken-3">
            {{ formTitle }}
          </v-card-title>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="form.title"
                    label="标题"
                    required
                    :readonly="readonly"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="form.parentId"
                    label="父级"
                    required
                    :readonly="readonly"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-select
                    v-model="form.type"
                    :items="typeItems"
                    item-text="label"
                    item-value="value"
                    label="类型"
                    :readonly="readonly"
                    return-object
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="form.icon"
                    label="图标"
                    :append-icon="form.icon"
                    :readonly="readonly"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="form.sort"
                    label="排序"
                    required
                    :readonly="readonly"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="form.component"
                    label="组件路径"
                    :readonly="readonly"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="form.path"
                    label="路由路径"
                    :readonly="readonly"
                    append-icon="fa-place"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                />
                <v-col
                  cols="12"
                  md="4"
                />
              </v-row>
            </v-container>
          </v-form>

          <v-card-actions>
            <v-btn v-if="formMode === 'view' && !!active[0]" class="ma-1" small dark color="success" @click="handleEditMode">
              <v-icon left dark dense>fw fa-edit</v-icon>编辑菜单
            </v-btn>
            <v-btn v-if="formMode === 'edit'" class="ma-1" small dark color="success">
              <v-icon left dark dense>fw far fa-check-circle</v-icon>提交
            </v-btn>
            <v-btn v-if="formMode === 'edit'" class="ma-1" small dark color="error" @click="handleCancelEditMode">
              <v-icon left dark dense>fw far fa-times-circle</v-icon>取消
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

const defaultMenuFormData = {
  id: null,
  parentId: null,
  sort: 1,
  name: null,
  title: null,
  type: 'catalog',
  icon: null,
  path: null,
  component: 'Layout',
  redirect: null,
  keepAlive: null,
  code: null,
  hidden: false,
  root: false,
  noCache: false
};

export default {
  name: 'Menu',
  data: () => ({
    active: [],
    typeIcons: {
      menu: 'fa-stream',
      button: 'fa-toggle-off',
      link: 'fa-anchor'
    },
    typeItems: [
      { label: '目录', value: 'catalog' },
      { label: '菜单', value: 'menu' },
      { label: '按钮', value: 'button' }
    ],
    items: [
      {
        name: 'permission',
        type: 'catalog',
        title: '权限管理',
        id: '2000000',
        parentId: '0',
        sort: 1,
        icon: 'fa-fw fa-user-cog',
        path: '/upms',
        component: 'Layout',
        redirect: null,
        keepAlive: '0',
        code: null,
        hidden: false,
        root: false,
        noCache: false,
        children: [
          {
            name: 'menu',
            type: 'menu',
            title: '菜单管理',
            id: '2000001',
            parentId: '2000000',
            sort: 1,
            icon: 'fa-fw fa-align-justify',
            path: '/upms/menu',
            component: '/admin/menu/index',
            redirect: null,
            keepAlive: '0',
            code: null,
            hidden: false,
            root: false,
            noCache: false
          },
          {
            name: 'role',
            type: 'menu',
            title: '角色管理',
            id: '2000002',
            parentId: '2000000',
            sort: 2,
            icon: 'fa-fw fa-user-lock',
            path: '/upms/role',
            component: '/admin/role/index',
            redirect: null,
            keepAlive: '0',
            code: null,
            hidden: false,
            root: false,
            noCache: false
          },
          {
            name: 'user',
            type: 'menu',
            title: '用户管理',
            id: '2000003',
            parentId: '2000000',
            sort: 3,
            icon: 'fa-fw fa-user',
            path: '/upms/user',
            component: '/admin/user/index',
            redirect: null,
            keepAlive: '0',
            code: null,
            hidden: false,
            root: false,
            noCache: false
          }
        ]
      },
      {
        name: 'comp',
        type: 'catalog',
        title: '组件',
        id: '3000000',
        parentId: '0',
        sort: 1,
        icon: 'fa-fw fa-th',
        path: '/comp',
        component: 'Layout',
        redirect: null,
        keepAlive: '0',
        code: null,
        hidden: false,
        root: false,
        noCache: false,
        children: [
          {
            name: 'basicTable',
            type: 'menu',
            title: '简单表格',
            id: '3000001',
            parentId: '3000000',
            sort: 1,
            icon: 'fa-fw fa-table',
            path: '/comp/basicTable',
            component: '/table/BasicTable',
            redirect: null,
            keepAlive: '0',
            code: null,
            hidden: false,
            root: false,
            noCache: false
          }
        ]
      }
    ],
    valid: false,
    readonly: true,
    formMode: 'view',
    formTitle: '菜单详情',
    form: defaultMenuFormData
  }),
  computed: {
  },
  watch: {
    active: {
      handler(val) {
        if (val && Array.isArray(val) && val.length > 0) {
          this.form = val[0];
        } else {
          this.form = defaultMenuFormData;
        }
      }
    }
  },
  methods: {
    updateFormTitle() {
      if (this.readonly) {
        this.formTitle = '菜单详情';
      } else if (this.formMode === 'edit') {
        this.formTitle = '编辑菜单';
      }
    },
    handleEditMode() {
      this.readonly = false;
      this.formMode = 'edit';
      this.updateFormTitle();
    },
    handleCancelEditMode() {
      this.readonly = true;
      this.formMode = 'view';
      this.updateFormTitle();
    },
    handleRemove() {
      this.$confirm('确认删除菜单？', { title: '删除菜单' }).then(res => {
      });
    }
  }
};
</script>

<style scoped>

</style>
