export const useMyAsyncFetch = (request, opts, contentType = 'application/json') => {
    const config = useRuntimeConfig()
    const {$auth} = useNuxtApp()
    var headerParams = {};

    if ($auth.strategy.token.status().valid() && !$auth.strategy.token.status().expired()) {
        headerParams.Authorization = $auth.strategy.token.get();
    }
    return useAsyncData(
        'response',
        () => $fetch(request, {baseURL: config.public.baseURL, headers: headerParams, ...opts})
    )
}
