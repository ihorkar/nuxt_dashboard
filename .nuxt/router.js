import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e25c254 = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages/icons" */))
const _077be9ea = () => interopDefault(import('..\\pages\\maps.vue' /* webpackChunkName: "pages/maps" */))
const _e7b534b8 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _47f393b1 = () => interopDefault(import('..\\pages\\table-list.vue' /* webpackChunkName: "pages/table-list" */))
const _90132dd2 = () => interopDefault(import('..\\pages\\tpgrade.vue' /* webpackChunkName: "pages/tpgrade" */))
const _d2740eba = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages/typography" */))
const _3c7983ca = () => interopDefault(import('..\\pages\\user-profile.vue' /* webpackChunkName: "pages/user-profile" */))
const _1abf4ee4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/icons",
    component: _5e25c254,
    name: "icons"
  }, {
    path: "/maps",
    component: _077be9ea,
    name: "maps"
  }, {
    path: "/notifications",
    component: _e7b534b8,
    name: "notifications"
  }, {
    path: "/table-list",
    component: _47f393b1,
    name: "table-list"
  }, {
    path: "/tpgrade",
    component: _90132dd2,
    name: "tpgrade"
  }, {
    path: "/typography",
    component: _d2740eba,
    name: "typography"
  }, {
    path: "/user-profile",
    component: _3c7983ca,
    name: "user-profile"
  }, {
    path: "/",
    component: _1abf4ee4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
