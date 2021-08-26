import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d191ddd = () => interopDefault(import('../pages/contact-me/index.vue' /* webpackChunkName: "pages/contact-me/index" */))
const _5231a731 = () => interopDefault(import('../pages/overview/index.vue' /* webpackChunkName: "pages/overview/index" */))
const _22a7c502 = () => interopDefault(import('../pages/publications/index.vue' /* webpackChunkName: "pages/publications/index" */))
const _55e2e5fa = () => interopDefault(import('../pages/skills/index.vue' /* webpackChunkName: "pages/skills/index" */))
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
    path: "/contact-me",
    component: _7d191ddd,
    name: "contact-me"
  }, {
    path: "/overview",
    component: _5231a731,
    name: "overview"
  }, {
    path: "/publications",
    component: _22a7c502,
    name: "publications"
  }, {
    path: "/skills",
    component: _55e2e5fa,
    name: "skills"
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
