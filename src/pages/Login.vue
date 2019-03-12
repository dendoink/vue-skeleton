<template>
  <div class="login-container">
    <mu-form ref="form" :model="validateForm" class="mu-login-form">
      <img src="../assets/login-logo.png" alt="login-logo" class="login-logo">
      <mu-form-item
        label-position="left"
        label="账号"
        label-width="60"
        help-text="请填写账号"
        prop="username"
        :rules="usernameRules"
      >
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item
        label-position="left"
        label-width="60"
        label="密码"
        prop="password"
        help-text="请输入您的密码"
        :rules="passwordRules"
      >
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <div class="mu-login-buttons">
        <mu-button @click="clear">重填</mu-button>
        <mu-button color="primary" @click="submit">登录</mu-button>
      </div>
    </mu-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { authentications } from "../service/";
export default {
  name: "login",
  components: {},
  data() {
    return {
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      validateForm: {
        username: "",
        password: "",
        isAgree: false
      }
    };
  },
  methods: {
    ...mapActions("login", ["LOGIN"]),
    async submit() {
      
      this.$router.push("/main");
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  },
  computed: {
    ...mapGetters(["token"])
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23b41fff'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%23f8ebff'/%3E%3Cstop offset='1' stop-color='%23ab05ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23f1d6ff'/%3E%3Cstop offset='1' stop-color='%239c00ea'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%23ebc2ff'/%3E%3Cstop offset='1' stop-color='%238a00d0'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%23e4aeff'/%3E%3Cstop offset='1' stop-color='%237900b6'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%23dd99ff'/%3E%3Cstop offset='1' stop-color='%2368009c'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%23d685ff'/%3E%3Cstop offset='1' stop-color='%23560082'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%23cf70ff'/%3E%3Cstop offset='1' stop-color='%23450068'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%23c85cff'/%3E%3Cstop offset='1' stop-color='%2334004e'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%23c248ff'/%3E%3Cstop offset='1' stop-color='%23230034'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%23bb33ff'/%3E%3Cstop offset='1' stop-color='%2311001a'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%23b41fff'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill-opacity='0.94'%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mu-login-form {
  width: 80%;
  background: #fff9;
  padding: 1rem 3rem;
  border-radius: 4px;
}
.mu-login-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.mu-form-item {
  margin-bottom: 1rem;
}
.login-logo {
  width: 10rem;
}
</style>

