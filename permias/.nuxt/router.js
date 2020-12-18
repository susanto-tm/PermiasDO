import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fc67c50 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _3ae9b1dd = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _759520cd = () => interopDefault(import('..\\pages\\freshman-guide.vue' /* webpackChunkName: "pages/freshman-guide" */))
const _66ea9c60 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _43cdf89a = () => interopDefault(import('..\\pages\\officers\\index.vue' /* webpackChunkName: "pages/officers/index" */))
const _a2e5059c = () => interopDefault(import('..\\pages\\origHome.vue' /* webpackChunkName: "pages/origHome" */))
const _5dd8f704 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _5d5d92de = () => interopDefault(import('..\\pages\\test2.vue' /* webpackChunkName: "pages/test2" */))
const _18c1dd58 = () => interopDefault(import('..\\pages\\officers\\all-officers.vue' /* webpackChunkName: "pages/officers/all-officers" */))
const _761ba4d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about-us",
    component: _0fc67c50,
    name: "about-us"
  }, {
    path: "/contact-us",
    component: _3ae9b1dd,
    name: "contact-us"
  }, {
    path: "/freshman-guide",
    component: _759520cd,
    name: "freshman-guide"
  }, {
    path: "/gallery",
    component: _66ea9c60,
    name: "gallery"
  }, {
    path: "/officers",
    component: _43cdf89a,
    name: "officers"
  }, {
    path: "/origHome",
    component: _a2e5059c,
    name: "origHome"
  }, {
    path: "/test",
    component: _5dd8f704,
    name: "test"
  }, {
    path: "/test2",
    component: _5d5d92de,
    name: "test2"
  }, {
    path: "/officers/all-officers",
    component: _18c1dd58,
    name: "officers-all-officers"
  }, {
    path: "/",
    component: _761ba4d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
