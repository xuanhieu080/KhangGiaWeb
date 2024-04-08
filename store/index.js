export const useMain = defineStore('main-store', {
    // arrow function recommended for full type inference
    state: () => ({
      pageGroups: [],
      pageHeaders: [],
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
      }
    }
  })
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMain, import.meta.hot))
  }