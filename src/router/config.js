import Main from '../pages/Main.vue'
import Login from '../pages/Login.vue'
import Me from '../pages/Me.vue'
import About from '../pages/About.vue'

export default[
  {
    path : '/',
    name : 'Login',
    component : Login
  }, {
    path : '/main',
    name : 'Main',
    component : Main
  }, {
    path : '/me',
    name : 'Me',
    component : Me
  }, {
    path : '/About',
    name : 'About',
    component : About
  }
]
