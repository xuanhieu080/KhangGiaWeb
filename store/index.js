import categories from '~/api/category_header.json'
import page_groups from '~/api/page_group.json'
import page_headers from '~/api/page_header.json'
export const useMain = defineStore('main-store', {
    // arrow function recommended for full type inference
    state: () => ({
      pageGroups: [],
      pageHeaders: [],
      categoryHeaders: [],
      cartNumber: null,
    }),
    actions: {
        async getPageGroup() {
          const { data: response, error } = await useMyFetch(`/api/v1/page-groups`);
          if (error.value) {
              console.log(error.value);
          } else {
              this.pageGroups = response.value.data
          }
            // this.pageGroups = page_groups
      },
        async getPageHeader() {
          const { data: response, error } = await useMyFetch(`/api/v1/pages/headers`);
          if (error.value) {
              console.log(error.value);
          } else {
              this.pageHeaders = response.value.data
          }
            // this.pageHeaders = page_headers
      },
        async getCategoryHeader() {
          const { data: response, error } = await useMyFetch(`/api/v1/categories/header`, {
            params: {
              limit: 5
            }
          });
            if (error.value) {
                console.log(error.value);
            } else {
                this.categoryHeaders = response.value.data
            }
          if(response.value) {
            this.categoryHeaders = response.value.data
          }
      }
    }
  })
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMain, import.meta.hot))
  }