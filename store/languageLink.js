export const useLanguageLink = defineStore('language-link', {
    // arrow function recommended for full type inference
    state: () => ({
      link: null
    }),
    actions: {
      
    }
  })
  
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLanguageLink, import.meta.hot))
  }