import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/main/Index'
import About from '@/components/main/About'
import Content from '@/components/main/Content'
import Contact from '@/components/main/Contact'

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
