/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'FUA',
  author: 'Fatih UA',
  headerTitle: 'FatihUA',
  description: 'A personal website created with passion/',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social.png`,
  email: 'fatihua@gmail.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  locale: 'en-US',
  stickyNav: false,
}

module.exports = siteMetadata
