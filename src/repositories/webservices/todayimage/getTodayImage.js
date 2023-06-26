import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/abstractWebservice";
import axios from "axios";

export const GET_TODAY_IMAGE = async () => {
    const body = {
        'params': {
            offset: 0,
            limit: 1
        }
    };

    let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, null);
    let config = WS.buildAstrobinQueryParams(body);

    return await axios.get(astrobinUrl, config);
};