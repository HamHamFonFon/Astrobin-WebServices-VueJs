import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";
import axios from "axios";

export const GET_TODAYS_IMAGE = async (offset, limit) => {
    const body = {
        offset: offset,
        limit: limit
    };

    try {
        let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, null);
        let config = WS.buildAstrobinQueryParams(body);

        const response = await axios.get(astrobinUrl, config);
        if (200 !== response.status) {
            const error = new Error(response.statusText);
            error.code = response.status;
            throw error;
        }

        if (1 === limit) {
            let todayResponse = response.data.objects[0];
            return {
                date: todayResponse.date,
                astrobinImageId: todayResponse.image.substr(todayResponse.image.lastIndexOf('/')+1)
            }
        } else {
            let listObjects = response.data.objects;
            return listObjects.map(todayResponse => {
                return {
                    date: todayResponse.date,
                    astrobinImageId: todayResponse.image.substr(todayResponse.image.lastIndexOf('/')+1)
                }
            });
        }

    } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
    }
};