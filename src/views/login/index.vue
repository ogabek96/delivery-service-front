<template>
  <div class="app-container">
    <div class="row">
      <div
        class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4"
      >
        <div class="login-panel panel panel-default">
          <div class="panel-heading">Log in</div>
          <div class="panel-body">
              <fieldset>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Login"
                    name="login"
                    type="text"
										v-model="formData.login"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
										v-model="formData.password"
                    required
                  />
                </div>
                <div class="checkbox">
                  <label>
                    <input
                      name="remember"
                      type="checkbox"
                      value="Remember Me"
                    />Remember Me
                  </label>
                </div>
								<button class="btn btn-primary" @click="signIn()">Login</button>
              </fieldset>
          </div>
        </div>
      </div>
      <!-- /.col-->
    </div>
    <!-- /.row -->
  </div>
</template>
<script>
import { auth } from "@/api/auth";
export default {
  data() {
    return {
      formData: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    signIn() {
      return auth(this.formData.login, this.formData.password).then(res => {
        if (res.data.signIn === false) {
					this.$message.error('Login or password is incorrect');
          return;
        }
        return this.$store.dispatch("SaveToken", res.data.token).then(() => {
          window.location.reload();
        });
			})
			.catch(() => {
				this.$message.error('Error in signing in');
			});
    }
  }
};
</script>
<style scoped></style>
