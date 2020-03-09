<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
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
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form ref="loginForm" v-model="valid">
                <v-text-field
                  v-model="loginForm.username"
                  :rules="loginRules.username"
                  label="Username"
                  name="username"
                  tabindex="1"
                  auto-complete="on"
                  required
                  prepend-icon="fa-user"
                  type="text"
                />

                <v-text-field
                  id="password"
                  v-model="loginForm.password"
                  :rules="loginRules.password"
                  label="Password"
                  name="password"
                  tabindex="2"
                  auto-complete="on"
                  required
                  prepend-icon="fa-lock"
                  type="password"
                  @keyup.enter.native="handleLogin"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" :loading="loading" @click.native.prevent="handleLogin">Login</v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="snackbar"
              :bottom="true"
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
