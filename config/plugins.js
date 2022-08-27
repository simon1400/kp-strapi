// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      produkt: {
        indexName: "categoryProducts",
        settings: {
          filterableAttributes: ['brand', 'categoryTitles', 'valuesTitles', 'parameters'],
          sortableAttributes: ['price'],
          searchableAttributes: [
            'title',
            'categoryTitles',
            'valuesTitles',
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
          }
          return data
        },
      }
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
