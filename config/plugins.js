// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      produkt: {
        transformEntry({ entry }) {
          return {
            ...entry,
            categoryTitles: entry.category.map(item => item.title),
            valuesTitles: entry.values.map(item => item.title),
            price: +entry.price,
          }
        },
        settings: {
          filterableAttributes: ['categoryTitles', 'brand', 'valuesTitles', 'parameters'],
          sortableAttributes: ['price'],
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



