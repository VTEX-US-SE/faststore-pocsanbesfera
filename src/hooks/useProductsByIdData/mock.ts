const mockData: any = (values: string[]): any => {
  const MOCKED_DATA =
    values.length > 0
      ? (JSON.parse(
          JSON.stringify([
            {
              additionalProperty: [],
              advertisement: null,
              brand: {
                brandName: 'São Pedro',
                name: 'São Pedro',
              },
              gtin: '2120403331',
              image: [
                {
                  alternateName: 'extraLarge',
                  url: 'https://americanasqa.vtexassets.com/arquivos/ids/18610538/2120403322_1_xlarge.jpg?v=638748043022570000',
                },
                {
                  alternateName: 'extraLarge',
                  url: 'https://americanasqa.vtexassets.com/arquivos/ids/18610568/2120403322_2_xlarge.jpg?v=638748043023670000',
                },
              ],
              isVariantOf: {
                name: 'Cama de Casal Piazza de Madeira Maciça Angelim Pedra/Tauari - Tabaco',
                productGroupID: '103356',
              },
              name: 'Cama de Casal Piazza de Madeira Maciça Angelim Pedra/Tauari - Tabaco',
              offers: {
                lowPrice: 61.9,
                lowPriceWithTaxes: 61.9,
                offers: [
                  {
                    availability: 'https://schema.org/InStock',
                    listPrice: 61.9,
                    listPriceWithTaxes: 61.9,
                    price: 61.9,
                    quantity: 10000,
                    seller: {
                      identifier: '1',
                    },
                  },
                ],
              },
              id: '110013',
              sku: '110013',
              slug: 'cama-de-casal-piazza-de-madeira-macica-angelim-pedra-tauari-tabaco-2120403322-110013',
              categories: [
                '/Móveis/Cama/Cama casal/',
                '/Móveis/Cama/',
                '/Móveis/',
              ],
              clusterHighlights: [],
              link: '/cama-de-casal-piazza-de-madeira-macica-angelim-pedra-tauari-tabaco-2120403322/p',
              properties: [
                {
                  name: 'Fabricante',
                  values: ['São Pedro'],
                },
                {
                  name: 'Material',
                  values: ['Madeira Maciça'],
                },
                {
                  name: 'Tamanho',
                  values: ['Casal'],
                },
                {
                  name: 'Condição do Item',
                  values: ['Novo'],
                },
                {
                  name: 'Id do Digital',
                  values: ['2120403322'],
                },
                {
                  name: 'Produto Internacional',
                  values: ['Não'],
                },
                {
                  name: 'sellerId',
                  values: ['1'],
                },
              ],
              sellers: [
                {
                  commertialOffer: {
                    Installments: [
                      {
                        Name: 'American Express à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'American Express 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.22,
                      },
                      {
                        Name: 'American Express 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21,
                      },
                      {
                        Name: 'American Express 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 15.89,
                      },
                      {
                        Name: 'American Express 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 12.82,
                      },
                      {
                        Name: 'American Express 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.78,
                      },
                      {
                        Name: 'American Express 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.32,
                      },
                      {
                        Name: 'American Express 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.22,
                      },
                      {
                        Name: 'American Express 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.37,
                      },
                      {
                        Name: 'American Express 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.69,
                      },
                      {
                        Name: 'American Express 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.14,
                      },
                      {
                        Name: 'American Express 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.67,
                      },
                      {
                        Name: 'Visa à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Visa 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.78,
                      },
                      {
                        Name: 'Visa 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21.38,
                      },
                      {
                        Name: 'Visa 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.17,
                      },
                      {
                        Name: 'Visa 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.05,
                      },
                      {
                        Name: 'Visa 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.97,
                      },
                      {
                        Name: 'Visa 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.49,
                      },
                      {
                        Name: 'Visa 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.37,
                      },
                      {
                        Name: 'Visa 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.51,
                      },
                      {
                        Name: 'Visa 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.81,
                      },
                      {
                        Name: 'Visa 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.25,
                      },
                      {
                        Name: 'Visa 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.78,
                      },
                      {
                        Name: 'Mastercard à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Mastercard 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.78,
                      },
                      {
                        Name: 'Mastercard 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21.38,
                      },
                      {
                        Name: 'Mastercard 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.17,
                      },
                      {
                        Name: 'Mastercard 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.05,
                      },
                      {
                        Name: 'Mastercard 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.97,
                      },
                      {
                        Name: 'Mastercard 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.49,
                      },
                      {
                        Name: 'Mastercard 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.37,
                      },
                      {
                        Name: 'Mastercard 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.51,
                      },
                      {
                        Name: 'Mastercard 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.81,
                      },
                      {
                        Name: 'Mastercard 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.25,
                      },
                      {
                        Name: 'Mastercard 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.78,
                      },
                      {
                        Name: 'Boleto Bancário à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Hipercard à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Vale à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Cash à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'AmeDigital à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Pix à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'CardPromissory à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'CardPromissory 2 vezes sem juros',
                        NumberOfInstallments: 2,
                        Value: 30.95,
                      },
                      {
                        Name: 'CardPromissory 3 vezes sem juros',
                        NumberOfInstallments: 3,
                        Value: 20.63,
                      },
                      {
                        Name: 'CardPromissory 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.13,
                      },
                      {
                        Name: 'CardPromissory 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.01,
                      },
                      {
                        Name: 'CardPromissory 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.93,
                      },
                    ],
                  },
                  sellerDefault: true,
                  sellerId: '1',
                  sellerName: 'AMERICANAS SA',
                },
              ],
            },
            {
              additionalProperty: [],
              advertisement: null,
              brand: {
                brandName: 'São Pedro',
                name: 'São Pedro',
              },
              gtin: '2120403331',
              image: [
                {
                  alternateName: 'extraLarge',
                  url: 'https://americanasqa.vtexassets.com/arquivos/ids/18610538/2120403322_1_xlarge.jpg?v=638748043022570000',
                },
                {
                  alternateName: 'extraLarge',
                  url: 'https://americanasqa.vtexassets.com/arquivos/ids/18610568/2120403322_2_xlarge.jpg?v=638748043023670000',
                },
              ],
              isVariantOf: {
                name: 'Cama de Casal Piazza de Madeira Maciça Angelim Pedra/Tauari - Tabaco',
                productGroupID: '103356',
              },
              name: 'Cama de Casal Piazza de Madeira Maciça Angelim Pedra/Tauari - Tabaco',
              offers: {
                lowPrice: 61.9,
                lowPriceWithTaxes: 61.9,
                offers: [
                  {
                    availability: 'https://schema.org/InStock',
                    listPrice: 61.9,
                    listPriceWithTaxes: 61.9,
                    price: 61.9,
                    quantity: 10000,
                    seller: {
                      identifier: '1',
                    },
                  },
                ],
              },
              id: '110013',
              sku: '110013',
              slug: 'cama-de-casal-piazza-de-madeira-macica-angelim-pedra-tauari-tabaco-2120403322-110013',
              categories: [
                '/Móveis/Cama/Cama casal/',
                '/Móveis/Cama/',
                '/Móveis/',
              ],
              clusterHighlights: [],
              link: '/cama-de-casal-piazza-de-madeira-macica-angelim-pedra-tauari-tabaco-2120403322/p',
              properties: [
                {
                  name: 'Fabricante',
                  values: ['São Pedro'],
                },
                {
                  name: 'Material',
                  values: ['Madeira Maciça'],
                },
                {
                  name: 'Tamanho',
                  values: ['Casal'],
                },
                {
                  name: 'Condição do Item',
                  values: ['Novo'],
                },
                {
                  name: 'Id do Digital',
                  values: ['2120403322'],
                },
                {
                  name: 'Produto Internacional',
                  values: ['Não'],
                },
                {
                  name: 'sellerId',
                  values: ['1'],
                },
              ],
              sellers: [
                {
                  commertialOffer: {
                    Installments: [
                      {
                        Name: 'American Express à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'American Express 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.22,
                      },
                      {
                        Name: 'American Express 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21,
                      },
                      {
                        Name: 'American Express 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 15.89,
                      },
                      {
                        Name: 'American Express 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 12.82,
                      },
                      {
                        Name: 'American Express 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.78,
                      },
                      {
                        Name: 'American Express 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.32,
                      },
                      {
                        Name: 'American Express 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.22,
                      },
                      {
                        Name: 'American Express 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.37,
                      },
                      {
                        Name: 'American Express 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.69,
                      },
                      {
                        Name: 'American Express 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.14,
                      },
                      {
                        Name: 'American Express 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.67,
                      },
                      {
                        Name: 'Visa à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Visa 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.78,
                      },
                      {
                        Name: 'Visa 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21.38,
                      },
                      {
                        Name: 'Visa 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.17,
                      },
                      {
                        Name: 'Visa 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.05,
                      },
                      {
                        Name: 'Visa 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.97,
                      },
                      {
                        Name: 'Visa 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.49,
                      },
                      {
                        Name: 'Visa 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.37,
                      },
                      {
                        Name: 'Visa 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.51,
                      },
                      {
                        Name: 'Visa 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.81,
                      },
                      {
                        Name: 'Visa 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.25,
                      },
                      {
                        Name: 'Visa 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.78,
                      },
                      {
                        Name: 'Mastercard à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Mastercard 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.78,
                      },
                      {
                        Name: 'Mastercard 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21.38,
                      },
                      {
                        Name: 'Mastercard 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.17,
                      },
                      {
                        Name: 'Mastercard 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.05,
                      },
                      {
                        Name: 'Mastercard 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.97,
                      },
                      {
                        Name: 'Mastercard 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.49,
                      },
                      {
                        Name: 'Mastercard 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.37,
                      },
                      {
                        Name: 'Mastercard 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.51,
                      },
                      {
                        Name: 'Mastercard 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.81,
                      },
                      {
                        Name: 'Mastercard 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.25,
                      },
                      {
                        Name: 'Mastercard 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.78,
                      },
                      {
                        Name: 'Boleto Bancário à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Hipercard à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Vale à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Cash à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'AmeDigital à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Pix à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'CardPromissory à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'CardPromissory 2 vezes sem juros',
                        NumberOfInstallments: 2,
                        Value: 30.95,
                      },
                      {
                        Name: 'CardPromissory 3 vezes sem juros',
                        NumberOfInstallments: 3,
                        Value: 20.63,
                      },
                      {
                        Name: 'CardPromissory 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.13,
                      },
                      {
                        Name: 'CardPromissory 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.01,
                      },
                      {
                        Name: 'CardPromissory 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.93,
                      },
                    ],
                  },
                  sellerDefault: true,
                  sellerId: '1',
                  sellerName: 'AMERICANAS SA',
                },
              ],
            },
            {
              additionalProperty: [],
              advertisement: null,
              brand: {
                brandName: 'São Pedro',
                name: 'São Pedro',
              },
              gtin: '2120403331',
              image: [
                {
                  alternateName: 'extraLarge',
                  url: 'https://americanasqa.vtexassets.com/arquivos/ids/18610538/2120403322_1_xlarge.jpg?v=638748043022570000',
                },
                {
                  alternateName: 'extraLarge',
                  url: 'https://americanasqa.vtexassets.com/arquivos/ids/18610568/2120403322_2_xlarge.jpg?v=638748043023670000',
                },
              ],
              isVariantOf: {
                name: 'Cama de Casal Piazza de Madeira Maciça Angelim Pedra/Tauari - Tabaco',
                productGroupID: '103356',
              },
              name: 'Cama de Casal Piazza de Madeira Maciça Angelim Pedra/Tauari - Tabaco',
              offers: {
                lowPrice: 61.9,
                lowPriceWithTaxes: 61.9,
                offers: [
                  {
                    availability: 'https://schema.org/InStock',
                    listPrice: 61.9,
                    listPriceWithTaxes: 61.9,
                    price: 61.9,
                    quantity: 10000,
                    seller: {
                      identifier: '1',
                    },
                  },
                ],
              },
              id: '110013',
              sku: '110013',
              slug: 'cama-de-casal-piazza-de-madeira-macica-angelim-pedra-tauari-tabaco-2120403322-110013',
              categories: [
                '/Móveis/Cama/Cama casal/',
                '/Móveis/Cama/',
                '/Móveis/',
              ],
              clusterHighlights: [],
              link: '/cama-de-casal-piazza-de-madeira-macica-angelim-pedra-tauari-tabaco-2120403322/p',
              properties: [
                {
                  name: 'Fabricante',
                  values: ['São Pedro'],
                },
                {
                  name: 'Material',
                  values: ['Madeira Maciça'],
                },
                {
                  name: 'Tamanho',
                  values: ['Casal'],
                },
                {
                  name: 'Condição do Item',
                  values: ['Novo'],
                },
                {
                  name: 'Id do Digital',
                  values: ['2120403322'],
                },
                {
                  name: 'Produto Internacional',
                  values: ['Não'],
                },
                {
                  name: 'sellerId',
                  values: ['1'],
                },
              ],
              sellers: [
                {
                  commertialOffer: {
                    Installments: [
                      {
                        Name: 'American Express à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'American Express 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.22,
                      },
                      {
                        Name: 'American Express 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21,
                      },
                      {
                        Name: 'American Express 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 15.89,
                      },
                      {
                        Name: 'American Express 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 12.82,
                      },
                      {
                        Name: 'American Express 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.78,
                      },
                      {
                        Name: 'American Express 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.32,
                      },
                      {
                        Name: 'American Express 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.22,
                      },
                      {
                        Name: 'American Express 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.37,
                      },
                      {
                        Name: 'American Express 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.69,
                      },
                      {
                        Name: 'American Express 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.14,
                      },
                      {
                        Name: 'American Express 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.67,
                      },
                      {
                        Name: 'Visa à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Visa 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.78,
                      },
                      {
                        Name: 'Visa 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21.38,
                      },
                      {
                        Name: 'Visa 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.17,
                      },
                      {
                        Name: 'Visa 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.05,
                      },
                      {
                        Name: 'Visa 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.97,
                      },
                      {
                        Name: 'Visa 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.49,
                      },
                      {
                        Name: 'Visa 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.37,
                      },
                      {
                        Name: 'Visa 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.51,
                      },
                      {
                        Name: 'Visa 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.81,
                      },
                      {
                        Name: 'Visa 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.25,
                      },
                      {
                        Name: 'Visa 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.78,
                      },
                      {
                        Name: 'Mastercard à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Mastercard 2 vezes com juros',
                        NumberOfInstallments: 2,
                        Value: 31.78,
                      },
                      {
                        Name: 'Mastercard 3 vezes com juros',
                        NumberOfInstallments: 3,
                        Value: 21.38,
                      },
                      {
                        Name: 'Mastercard 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.17,
                      },
                      {
                        Name: 'Mastercard 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.05,
                      },
                      {
                        Name: 'Mastercard 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.97,
                      },
                      {
                        Name: 'Mastercard 7 vezes com juros',
                        NumberOfInstallments: 7,
                        Value: 9.49,
                      },
                      {
                        Name: 'Mastercard 8 vezes com juros',
                        NumberOfInstallments: 8,
                        Value: 8.37,
                      },
                      {
                        Name: 'Mastercard 9 vezes com juros',
                        NumberOfInstallments: 9,
                        Value: 7.51,
                      },
                      {
                        Name: 'Mastercard 10 vezes com juros',
                        NumberOfInstallments: 10,
                        Value: 6.81,
                      },
                      {
                        Name: 'Mastercard 11 vezes com juros',
                        NumberOfInstallments: 11,
                        Value: 6.25,
                      },
                      {
                        Name: 'Mastercard 12 vezes com juros',
                        NumberOfInstallments: 12,
                        Value: 5.78,
                      },
                      {
                        Name: 'Boleto Bancário à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Hipercard à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Vale à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Cash à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'AmeDigital à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'Pix à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'CardPromissory à vista',
                        NumberOfInstallments: 1,
                        Value: 61.9,
                      },
                      {
                        Name: 'CardPromissory 2 vezes sem juros',
                        NumberOfInstallments: 2,
                        Value: 30.95,
                      },
                      {
                        Name: 'CardPromissory 3 vezes sem juros',
                        NumberOfInstallments: 3,
                        Value: 20.63,
                      },
                      {
                        Name: 'CardPromissory 4 vezes com juros',
                        NumberOfInstallments: 4,
                        Value: 16.13,
                      },
                      {
                        Name: 'CardPromissory 5 vezes com juros',
                        NumberOfInstallments: 5,
                        Value: 13.01,
                      },
                      {
                        Name: 'CardPromissory 6 vezes com juros',
                        NumberOfInstallments: 6,
                        Value: 10.93,
                      },
                    ],
                  },
                  sellerDefault: true,
                  sellerId: '1',
                  sellerName: 'AMERICANAS SA',
                },
              ],
            },
          ])
        ) as any)
      : JSON.parse(
          JSON.stringify({
            products: [],
          })
        )
  return MOCKED_DATA
}

export default mockData
