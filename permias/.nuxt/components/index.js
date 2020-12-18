export { default as Gallery } from '../..\\components\\Gallery.vue'
export { default as NavbarHamburger } from '../..\\components\\NavbarHamburger.vue'
export { default as Officer } from '../..\\components\\Officer.vue'
export { default as Officers } from '../..\\components\\Officers.vue'
export { default as ArrowPage } from '../..\\components\\icons\\ArrowPage.vue'
export { default as ScrollDown } from '../..\\components\\icons\\ScrollDown.vue'
export { default as Navbar } from '../..\\components\\navigation\\Navbar.vue'
export { default as SideNavbar } from '../..\\components\\navigation\\SideNavbar.vue'
export { default as OldGallery } from '../..\\components\\old-components\\OldGallery.vue'
export { default as OldOfficer } from '../..\\components\\old-components\\OldOfficer.vue'
export { default as DefaultText } from '../..\\components\\text\\DefaultText.vue'

export const LazyGallery = import('../..\\components\\Gallery.vue' /* webpackChunkName: "components_Gallery" */).then(c => c.default || c)
export const LazyNavbarHamburger = import('../..\\components\\NavbarHamburger.vue' /* webpackChunkName: "components_NavbarHamburger" */).then(c => c.default || c)
export const LazyOfficer = import('../..\\components\\Officer.vue' /* webpackChunkName: "components_Officer" */).then(c => c.default || c)
export const LazyOfficers = import('../..\\components\\Officers.vue' /* webpackChunkName: "components_Officers" */).then(c => c.default || c)
export const LazyArrowPage = import('../..\\components\\icons\\ArrowPage.vue' /* webpackChunkName: "components_icons/ArrowPage" */).then(c => c.default || c)
export const LazyScrollDown = import('../..\\components\\icons\\ScrollDown.vue' /* webpackChunkName: "components_icons/ScrollDown" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\navigation\\Navbar.vue' /* webpackChunkName: "components_navigation/Navbar" */).then(c => c.default || c)
export const LazySideNavbar = import('../..\\components\\navigation\\SideNavbar.vue' /* webpackChunkName: "components_navigation/SideNavbar" */).then(c => c.default || c)
export const LazyOldGallery = import('../..\\components\\old-components\\OldGallery.vue' /* webpackChunkName: "components_old-components/OldGallery" */).then(c => c.default || c)
export const LazyOldOfficer = import('../..\\components\\old-components\\OldOfficer.vue' /* webpackChunkName: "components_old-components/OldOfficer" */).then(c => c.default || c)
export const LazyDefaultText = import('../..\\components\\text\\DefaultText.vue' /* webpackChunkName: "components_text/DefaultText" */).then(c => c.default || c)
