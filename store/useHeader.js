export const useHeader = defineStore('header-store', {
    // arrow function recommended for full type inference
    state: () => ({
      // all these properties will have their type inferred automatically
      isScrollDown: false,
      isLoadingPage: true,
      menuMobile: false,
    }),
    actions: {
      
    }
  })
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useHeader, import.meta.hot))
  }