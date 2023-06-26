import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";
import axios from "axios";

export const GET_IMAGE_BY_ID = async (idImage) => {
    try {
        let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, idImage);
        let config = WS.buildAstrobinQueryParams(null);
        const response = await axios.get(astrobinUrl, config);

        if (200 !== response.status) {
            throw new Error(response.statusText);
        }

        return {
            id: response.data.id,
            astrobin_id: response.data.hash,
            title: response.data.title,
            subjects: response.data.subjects,
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
        throw new Error('Request error: ' + err.message);
    }
};