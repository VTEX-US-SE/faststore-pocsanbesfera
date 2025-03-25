module.exports = {
  seo: {
    title: 'Santander Shopping',
    description:
      'Compre nos maiores varejistas, pague com condições exclusivas e ganhe pontos Esfera.',
    titleTemplate: '%s | Santander Shopping',
    author: 'Santander',
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'pocsanbesfera',
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: 'BRL',
      symbol: 'R$',
    },
    locale: 'pt-BR',
    channel: '{"salesChannel":1,"regionId":""}',
    country: 'BRA',
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: 'https://pocsanbesfera.vtex.app',
  secureSubdomain: 'https://secure.vtexfaststore.com/',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  previewRedirects: {
    home: '/',
    plp: '/eletronicos',
    search: '/s?q=Samsung',
    pdp: '/tablet-samsung-tab-s7-256gb-8gb-ram-tela-de-11-camera-traseira-13-0mp-5-0mp-ultra-wide-camera-frontal-de-8mp-4g-e-android-10-0-grafite-55011384/p',
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/tablet-samsung-tab-s7-256gb-8gb-ram-tela-de-11-camera-traseira-13-0mp-5-0mp-ultra-wide-camera-frontal-de-8mp-4g-e-android-10-0-grafite-55011384/p',
      collection: '/eletronicos',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/tablet-samsung-tab-s7-256gb-8gb-ram-tela-de-11-camera-traseira-13-0mp-5-0mp-ultra-wide-camera-frontal-de-8mp-4g-e-android-10-0-grafite-55011384/p',
      collection: '/eletronicos',
      collection_filtered:
        '/eletronicos?category-1=eletronicos&operator=and&brand=Samsung',
      search: '/s?q=Samsung',
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    // gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      'https://pocsanbesfera.myvtex.com/cms-releases/webhook-releases',
    ],
  },
}
