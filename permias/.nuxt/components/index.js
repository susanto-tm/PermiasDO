export { default as Gallery } from '../..\\components\\Gallery.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Officer } from '../..\\components\\Officer.vue'
export { default as Officers } from '../..\\components\\Officers.vue'

export const LazyGallery = import('../..\\components\\Gallery.vue' /* webpackChunkName: "components_Gallery" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
export const LazyOfficer = import('../..\\components\\Officer.vue' /* webpackChunkName: "components_Officer" */).then(c => c.default || c)
export const LazyOfficers = import('../..\\components\\Officers.vue' /* webpackChunkName: "components_Officers" */).then(c => c.default || c)
