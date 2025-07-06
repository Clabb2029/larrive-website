/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.atelier-larrive.fr',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}