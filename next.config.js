// next.config.js
//module.exports = {
//  i18n: {
//    locales: ['en-US', 'fr', 'nl-NL'],
//    defaultLocale: 'en-US',
//  },
//}

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'nl-NL'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: '2014592.yc422543.web.hosting-test.net',
        defaultLocale: 'en-US',
      },
      {
        domain: '2014592.yc422543.web.hosting-test.net/nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: '2014592.yc422543.web.hosting-test.net/fr',
        defaultLocale: 'fr',
      },
    ],
  },
}