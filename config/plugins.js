// config/plugins.js

module.exports = {
  meilisearch: {
    config: {
      produkt: {
        indexName: "categoryProducts",
        settings: {
          filterableAttributes: ['brand', 'category', 'values', 'parameters'],
          sortableAttributes: ['price'],
          searchableAttributes: [
            'title',
            'category',
            'brand',
            'categorySlug',
            'brandsSlug',
            'code',
            'services',
            'slug'
          ],
        },
        // transformEntry({ entry }) {
        //   const data = {
        //     id: entry.id,
        //     title: entry?.title,
        //     logo: entry?.logo,
        //     content: entry?.content,
        //     phone: entry?.contact?.phone,
        //     slug: entry?.slug,
        //     type: entry?.type,
        //     rating: entry?.rating || 0,
        //     address: entry?.address,
        //     specialisations: entry.specialisations.map(specialisation => specialisation?.title),
        //     services: entry.services.map(service => service?.title),
        //     city: entry?.address.split(',')[0].split('г.')[1]
        //   }
        //   return data
        // },
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
