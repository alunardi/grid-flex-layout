import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/principal/Index'
import About from '@/components/principal/About'
import Content from '@/components/principal/Content'
import Contact from '@/components/principal/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          component: Content
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'about',
          component: About
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'contact',
          component: Contact
        }
      ]
    }
  ]
})
