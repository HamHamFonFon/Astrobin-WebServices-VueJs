import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";
import axios from "axios";

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
        return await axios.get(astrobinUrl, config);
    } catch (err) {
        throw new Error('Request error: ' + err.message);
    }
};