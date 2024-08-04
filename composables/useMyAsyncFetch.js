export const useMyAsyncFetch = (request, opts, contentType = 'application/json') => {
    const config = useRuntimeConfig()
    var headerParams = {};

    return useAsyncData(
        'response',
        () => $fetch(request, {baseURL: config.public.apiURL, headers: headerParams, ...opts})
    )
}
