<template>
  <div id="app">
    <div class="app-header" v-show="showHeaderAndMenu">
      <div class="app-title">{{currentRoute}}</div>
      <div class="app-header-group-buttons">
        <mu-button fab small color="pink" class="search-button">
          <mu-icon value="search"></mu-icon>
        </mu-button>
        <mu-button fab small>
          <mu-icon value="add"></mu-icon>
        </mu-button>
      </div>
    </div>
    <router-view/>
    <div class="app-menu" v-show="showHeaderAndMenu">
      <mu-container class="app-menu-container">
        <mu-bottom-nav :value.sync="currentRoute">
          <mu-bottom-nav-item title="关于" value="关于" icon="person" to="/About"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="菜单" value="主菜单" icon="menu" to="/Main"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="我的" value="我的" icon="how_to_reg" to="/Me"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </div>
  </div>
</template>
<script scoped>
import common from "../src/mixins/common";
export default {
  name: "App",
  mixins: [common],
  data() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {
    showHeaderAndMenu: function() {
      return this.currentRoute !== "Login";
    }
  },

  mounted() {}
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app-menu-container {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  padding: 0px !important;
  border-top: 1px solid #ccc;
}
.app-header {
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;
  background: #e6e6e6;
}

.app-header .app-title {
  font-size: 1.5rem;
  font-weight: 600;
}
.app-header .app-header-group-buttons {
  padding: 0.5rem 0rem;
}
.app-header .app-header-group-buttons .search-button {
  margin-right: 2rem;
}
</style>
