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
      },
        async getPageHeader() {
          const { data: response, error } = await useMyFetch(`/api/v1/pages/headers`);
          if (error.value) {
              console.log(error.value);
          } else {
              this.pageHeaders = response.value.data
          }
      },
        async getCategoryHeader() {
          const { data: response, error } = await useMyFetch(`/api/v1/categories/header`, {
            params: {
              limit: 5
            }
          });
          if(response.value) {
              console.log( response.value.data);
            this.categoryHeaders = response.value.data
          }
      }
    }
  })
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMain, import.meta.hot))
  }