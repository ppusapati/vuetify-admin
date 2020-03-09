<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <v-list-item
        v-if="onlyOneChild.meta"
        link
        :to="resolvePath(onlyOneChild.path)"
      >
        <v-list-item-action>
          <v-icon>{{ onlyOneChild.meta.icon||(item.meta&&item.meta.icon) }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ onlyOneChild.meta.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-list-group
      v-else
      :key="item.name"
      :index="resolvePath(item.path)"
      :prepend-icon="item.meta && item.meta.icon"
      :group="item.name"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.meta.title }}
          </v-list-item-title>
        </v-list-item-content>
      </template>
      <nav-drawer-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </v-list-group>
  </div>
</template>

<script>
import path from 'path';
import { isExternal } from '@/utils/validate';
import { mapGetters } from 'vuex';

export default {
  name: 'NavDrawerItem',
  components: {},
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    onlyOneChild: null
  }),
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
<style scoped>
</style>
