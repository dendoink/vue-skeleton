import {router} from './router';

// 设置导航守卫
router.beforeEach((to, from, next) => {
  // if (to.path !== '/') { // 没有登录，直接跳转到登录   const userInfo = {}   if
  // (!userInfo.token || userInfo) {     next('/');   } }
  next();
});

// 设置导航守卫
router.afterEach(() => {
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0);
});
