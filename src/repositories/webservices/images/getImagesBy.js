import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";
import axios from "axios";
import ImageFilters from "@/repositories/enums/ImageFilters"
const checkParameters = (params) => {
    return params.filter((value, key) => key === new ImageFilters(key));
}

export const GET_IMAGES_BY = async (params, offset, limit) => {
    params = checkParameters(params);

    try {
        let customParams = {
            'offset': offset,
            'limit': limit
        };

        let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, null);
        let config = WS.buildAstrobinQueryParams(
            {
                ...params,
                ...customParams
            }
        );
        const response = await axios.get(astrobinUrl, config);

        return Object.entries(response).map(image => {
            return {
                id: image.data.id,
                astrobin_id: image.data.hash,
                title: image.data.title,
                subjects: image.data.subjects,
                uploaded: image.data.uploaded,
                urlGallery: image.data.url_gallery,
                urlThumb: image.data.url_thumb,
                urlRegular: image.data.url_regular,
                urlHd: image.data.url_hd,
                user: image.data.user,
                urlHistogram: image.data.url_histogram,
                urlSkyplot: image.data.url_skyplot
            }
        })
    } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
    }
};