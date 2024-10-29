export default defineNuxtRouteMiddleware((to) => {
    if (to.path.startsWith('/en/')) {
        return navigateTo({ path: `/vi/404` }, { redirectCode: 301, replace: true });
    }
})
