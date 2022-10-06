// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      produkt: {
        // indexName: "categoryProducts",
        settings: {
          filterableAttributes: ['brand', 'categoryTitles', 'valuesTitles', 'parameters'],
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
        transformEntry({ entry }) {
          const data = {
            ...entry,
            categoryTitles: entry.category.map(item => item.title),
            valuesTitles: entry.values.map(item => item.title),
            price: +entry.price,
          }
          return data
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
