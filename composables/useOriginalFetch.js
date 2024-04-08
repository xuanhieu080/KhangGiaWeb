export const useOriginalFetch = (request, opts, contentType = 'application/json') => {
    let headerParams = {};
    const config = useRuntimeConfig();
    // const { $auth } = useNuxtApp();
    // if ($auth && $auth.strategy.token.status().valid() && !$auth.strategy.token.status().expired()) {
    //     headerParams.Authorization = $auth.strategy.token.get();
    // }

    return $fetch(`${config.public.apiURL}${request}`, { baseURL: config.public.apiURL, headers: headerParams, ...opts });
};
