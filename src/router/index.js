import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '@/components/Landing.vue'
import Architecture from '@/views/Architecture.vue'
import Concept from '@/views/Concept.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Project from '@/components/Project.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/Architecture',
      name: 'Architecture',
      component: Architecture
    },
    {
      path: '/Concept',
      name: 'Concept',
      component: Concept
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Architecture/:project',
      name: 'Project',
      component: Project,
      props: true
    }
  ]
})
export default router
