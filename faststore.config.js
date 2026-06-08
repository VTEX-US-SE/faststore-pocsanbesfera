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
  storeUrl: 'https://santander.b2cdemostore.com',
  secureSubdomain: 'https://santander.b2cdemostore.com/',
  checkoutUrl: 'https://santander.b2cdemostore.com/checkout',
  loginUrl: 'https://santander.b2cdemostore.com/login',
  accountUrl: 'https://santander.b2cdemostore.com/account',

  previewRedirects: {
    home: '/',
    plp: '/eletronicos',
    search: '/s?q=Samsung',
    pdp: '/fastshop-104/p',
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/cea-108/p',
      collection: '/eletronicos',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/cea-108/p',
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

  contentSource: {
    type: 'CP',
  },

  vtexHeadlessCms: {
    webhookUrls: [
      'https://pocsanbesfera.myvtex.com/cms-releases/webhook-releases',
    ],
  },
}
