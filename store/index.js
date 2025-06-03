export const useMain = defineStore('main-store', {
    // arrow function recommended for full type inference
    state: () => ({
        pageGroups: [],
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
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMain, import.meta.hot));
}