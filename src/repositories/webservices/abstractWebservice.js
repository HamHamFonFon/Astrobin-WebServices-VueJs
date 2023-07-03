
const ASTROBIN_URI = 'https://www.astrobin.com';
const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
const ASTROBIN_QUERY_PARAMS = {
    api_key: process.env.VUE_APP_ASTROBIN_API_KEY,
    api_secret: process.env.VUE_APP_ASTROBIN_API_SECRET,
    format: 'json'
};

/**
 * Build Astrobin URL with endpoint
 * @param endpoint
 * @param params
 * @returns {string}
 */
const buildAstrobinUrl = (endpoint, params) => {
    let common_url_part = ASTROBIN_URI + '/api/v1/' + endpoint
    return (null === params) ? common_url_part : common_url_part + '/' + params
};

/**
 * Build headers request and astrobin query parameters "/?param=X&param2=Y...
 * @param customParams
 * @returns {{headers: {Accept: string, "Content-Type": string}, params: (*)}}
 */
const buildAstrobinQueryParams = (customParams) => {
    if (!ASTROBIN_QUERY_PARAMS.api_key || !ASTROBIN_QUERY_PARAMS.api_secret) {
        throw new Error('Astrobin API keys are missing');
    }

    return {
        'headers': HEADERS,
        'params': {
            ...ASTROBIN_QUERY_PARAMS,
            ...customParams
        }
    };
};

export {
    buildAstrobinUrl,
    buildAstrobinQueryParams
}