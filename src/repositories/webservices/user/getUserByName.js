import axios from "axios";
import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";

export const GET_USER_BY_NAME = async (userName) => {
    if ('' === userName || null === userName) {
        const error = new Error('No username provided, please fill it one');
        error.code = 500;
        throw error;
    }

    let customParams = {
        username: userName
    };

    try {
        let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, null);
        let config = WS.buildAstrobinQueryParams(customParams);
        const response = await axios.get(astrobinUrl, config);

        let user = response.data.objects[0];
        return {
            id: user.id,
            username: user.username,
            avatar: user.avatar,
            about: user.about,
            website: user.website,
            job: user.job,
            language: user.language,
            image_count: user.image_count,
            followers_count: user.followers_count,
            following_count: user.following_count,
            received_likes_count: user.received_likes_count
        }
    } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
    }
};