<template>
  <div class="themeSetting">
    <v-toolbar color="black darken-3">
      <v-toolbar-title>
        {{ $t('settings.title') }}
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row column>
        <v-col>
          <v-subheader class="px-1 my-2">
            {{ $t('settings.colorOption') }}
          </v-subheader>
          <div class="color-option">
            <v-row wrap>
              <label
                v-for="(option, index) in themeColorOptions"
                :key="index"
                class="color-option--label flex xs6 pa-1"
              >
                <input v-model="themeColor" type="radio" name="color" :value="option.key">
                <span class="color-option--item bg">
                  <span class="overlay">
                    <v-icon style="color: white;">fa-check</v-icon>
                  </span>
                  <span class="color-option--item--header sideNav darken-3" :class="option.value.sideNav" />
                  <span class="color-option--item--header mainNav darken-3" :class="option.value.mainNav" />
                  <span class="sideMenu" :class="option.value.sideMenu" />
                </span>
              </label>
            </v-row>
          </div>
          <!--          <div class="theme-options">-->
          <!--            <v-subheader class="px-1 my-2">-->
          <!--              Sidebar Option-->
          <!--            </v-subheader>-->
          <!--            <v-divider />-->
          <!--            <div class="my-3">-->
          <!--              <v-btn-toggle v-model="sideBarOption" dense>-->
          <!--                <v-btn text value="dark">-->
          <!--                  Dark-->
          <!--                </v-btn>-->
          <!--                <v-btn text value="light">-->
          <!--                  Light-->
          <!--                </v-btn>-->
          <!--              </v-btn-toggle>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="theme-options">
            <v-subheader class="px-1 my-2">
              {{ $t('settings.language') }}
            </v-subheader>
            <v-divider />
            <div class="my-3">
              <v-btn-toggle v-model="i18nBarOption" dense>
                <v-btn text value="zh-CN">
                  中文
                </v-btn>
                <v-btn text value="en">
                  English
                </v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import colors from 'vuetify/es5/util/colors';

export default {
  name: 'SystemSettings',
  data() {
    return {
      themeColor: 'blue',
      sideBarOption: 'light',
      i18nBarOption: 'zh-CN',
      colors: colors
    };
  },
  computed: {
    themeColorOptions() {
      return [
        {
          key: 'blue',
          value: {
            sideNav: 'blue',
            mainNav: 'blue',
            sideMenu: 'white'
          }
        },
        {
          key: 'teal',
          value: {
            sideNav: 'teal',
            mainNav: 'teal',
            sideMenu: 'white'
          }
        },
        {
          key: 'red',
          value: {
            sideNav: 'red',
            mainNav: 'red',
            sideMenu: 'white'
          }
        },
        {
          key: 'orange',
          value: {
            sideNav: 'orange',
            mainNav: 'orange',
            sideMenu: 'white'
          }
        },
        {
          key: 'purple',
          value: {
            sideNav: 'purple',
            mainNav: 'purple',
            sideMenu: 'white'
          }
        },
        {
          key: 'indigo',
          value: {
            sideNav: 'indigo',
            mainNav: 'indigo',
            sideMenu: 'white'
          }
        },
        {
          key: 'cyan',
          value: {
            sideNav: 'cyan',
            mainNav: 'cyan',
            sideMenu: 'white'
          }
        },
        {
          key: 'pink',
          value: {
            sideNav: 'pink',
            mainNav: 'pink',
            sideMenu: 'white'
          }
        },
        {
          key: 'green',
          value: {
            sideNav: 'green',
            mainNav: 'green',
            sideMenu: 'white'
          }
        }
      ];
    }
  },
  watch: {
    themeColor: {
      handler(val) {
        const theme = this.colors[val].base;
        if (this.$vuetify.theme.dark) {
          // Dark theme
          this.$vuetify.theme.themes.dark.primary = theme;
        } else {
          // Light theme
          this.$vuetify.theme.themes.light.primary = theme;
        }
      },
      immediate: true
    },
    sideBarOption: {
      handler(val) {
        this.$vuetify.theme.dark = (val === 'dark');
      }
    },
    i18nBarOption: {
      handler(lang) {
        if (this.$i18n.locale !== lang && lang) { this.$i18n.locale = lang }
      }
    }
  }
};
</script>
<style scoped>
  .v-toolbar__title {
    font-weight: 500;
    color: white;
  }
  .color-option--label {
    position: relative;
    display: block;
    cursor: pointer;
  }

  .color-option--label input[type="radio"] {
    display: none;
  }

  .color-option--label input[type="radio"] + span {
    position: relative;
  }

  .color-option--label input[type="radio"] + span > .overlay {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 30px;
    color: #fff;
  }

  .color-option--label input[type="radio"]:checked + span > .overlay {
    display: block;
  }

  .color-option--label .bg {
    background-color: #f1f1f1;
  }

  .color-option--item {
    overflow: hidden;
    display: block;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
  }

  .color-option--item--header {
    height: 10px;
  }

  .color-option--item > span {
    display: block;
    float: left;
    width: 50%;
    height: 20px;
  }
</style>
