// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      produkt: {
        transformEntry({ entry }) {
          const data = {
            ...entry,
            categoryTitles: entry.category.map(item => item.title),
            valuesTitles: entry.values.map(item => item.title),
            price: +entry.price,
          }
          return data
        },
        settings: {
          filterableAttributes: ['brand', 'categoryTitles', 'valuesTitles', 'parameters'],
          sortableAttributes: ['price'],
          distinctAttribute: "brand",
          searchableAttributes: [
            'title',
            'categoryTitles',
            'valuesTitles',
            "price",
            'brand',
            'code',
            'slug'
          ],
        },
      },
      category: {
        settings: {
          searchableAttributes: ['title'],
        },
      },
      brand: {
        settings: {
          searchableAttributes: ['title'],
        },
      },
      article: {
        settings: {
          searchableAttributes: ['title'],
        },
      },
    }
  },
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 50,
      depthLimit: 50,
      maxLimit: 20,
    }
  }
}



