import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d2f6fecc = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7d191ddd = () => interopDefault(import('../pages/contact-me/index.vue' /* webpackChunkName: "pages/contact-me/index" */))
const _55e2e5fa = () => interopDefault(import('../pages/skills/index.vue' /* webpackChunkName: "pages/skills/index" */))
const _1ebb7113 = () => interopDefault(import('../pages/story/index.vue' /* webpackChunkName: "pages/story/index" */))
const _62c10fed = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _521bb4c5 = () => interopDefault(import('../pages/*.vue' /* webpackChunkName: "pages/*" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _d2f6fecc,
    name: "blog"
  }, {
    path: "/contact-me",
    component: _7d191ddd,
    name: "contact-me"
  }, {
    path: "/skills",
    component: _55e2e5fa,
    name: "skills"
  }, {
    path: "/story",
    component: _1ebb7113,
    name: "story"
  }, {
    path: "/",
    component: _62c10fed,
    name: "index"
  }, {
    path: "/*",
    component: _521bb4c5,
    name: "*"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
