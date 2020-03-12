<template>
  <v-app class="split-bg primary">
    <v-content>
      <v-container fluid class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="@/assets/logo.svg" alt="Vuetify Admin" width="120" height="120">
                  <h1 class="flex my-4 primary--text">
                    {{ $t('toolbar.appName') }}
                  </h1>
                </div>
                <v-form ref="loginForm" v-model="valid">
                  <v-text-field
                    v-model="loginForm.username"
                    :rules="loginRules.username"
                    prepend-icon="fa-user"
                    name="username"
                    label="Username"
                    tabindex="1"
                    auto-complete="on"
                    required
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="loginForm.password"
                    :rules="loginRules.password"
                    prepend-icon="fa-lock"
                    name="password"
                    label="Password"
                    type="password"
                    tabindex="2"
                    auto-complete="on"
                    required
                    @keyup.enter.native="handleLogin"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="green">fab fa-weixin</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="blue">fab fa-qq</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fab fa-weibo</v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn color="primary" :loading="loading" block @click.native.prevent="handleLogin">Login</v-btn>
              </v-card-actions>
              <v-snackbar
                v-model="snackbar"
                :top="true"
                color="error"
                :timeout="5000"
              >
                {{ text }}
                <v-btn
                  dark
                  text
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </v-snackbar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      valid: true,
      snackbar: false,
      text: 'Form is invalid',
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [
          v => !!v || 'Username is required'
        ],
        password: [
          v => !!v || 'Password is required'
        ]
      },
      loading: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      const valid = this.$refs.loginForm.validate();
      if (valid) {
        this.loading = true;
        this.$store.dispatch('user/login', this.loginForm).then(() => {
          this.$router.push({ path: this.redirect || '/' });
          this.loading = false;
        }).catch(() => {
          this.loading = false;
        });
      } else {
        this.snackbar = true;
        return false;
      }
    }
  }
};
</script>
<style scoped>
  .split-bg {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
