// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      produkt: {
        indexName: "categoryProducts",
        settings: {
          filterableAttributes: ['brand', 'categoryTitles', 'valuesTitles', 'parameters'],
          sortableAttributes: ['price'],
          faceting: ['categoryTitles', "brand", "valuesTitles", "parameters"],
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
}


// "categoryProducts": {
//   query_by: "category,brand,categorySlug,brandsSlug",
// },
// "produkties": {
//   query_by: "title,code,category,brand,categorySlug,brandsSlug"
// },
// "categories": {
//   query_by: "title"
// },
// "brands": {
//   query_by: "title"
// },
// "blogs": {
//   query_by: "title"
// }
