import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";
import axios from "axios";

export const GET_IMAGE_BY_ID = async (idImage) => {
    if ('' === idImage || null === idImage) {
        const error = new Error('No astrobin ID provided, please fill it one');
        error.code = 500;
        throw error;
    }
    try {
        let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, idImage);
        let config = WS.buildAstrobinQueryParams(null);
        const response = await axios.get(astrobinUrl, config);

        if (200 !== response.status) {
            const error = new Error(response.statusText);
            error.code = response.status;
            throw error;
        }

        return {
            id: response.data.id,
            astrobin_id: response.data.hash,
            title: response.data.title,
            subjects: response.data.subjects,
            description: response.data.description,
            uploaded: response.data.uploaded,
            urlGallery: response.data.url_gallery,
            urlThumb: response.data.url_thumb,
            urlRegular: response.data.url_regular,
            urlHd: response.data.url_hd,
            user: response.data.user,
            urlHistogram: response.data.url_histogram,
            urlSkyplot: response.data.url_skyplot
        }
    } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
    }
};