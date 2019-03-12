const common = {
  data() {
    return {
      routeToTitle: {
        Login: 'Login',
        About: '关于',
        Me: '我的',
        Main: '主菜单'
      }
    };
  },
  methods: {
    handleRoute: function (route = 'home') {
      this
        .$router
        .push(route);
    }
  },
  computed: {
    currentRoute: {
      get: function () {
        return this.routeToTitle[this.$route.name];

      },
      set: function () {}
    }
  },
  mounted() {
    console.log(this.currentRoute)
  }
};

export default common;
