import axios from "axios";
import { ENDPOINT } from './endpoint'
import * as WS from "@/repositories/webservices/abstractWebservice.js";

export const GET_USER_BY_ID = async (userId) => {

    if ('' === userId || null === userId) {
        const error = new Error('No user id provided, please fill it one');
        error.code = 500;
        throw error;
    }

    try {
        let astrobinUrl = WS.buildAstrobinUrl(ENDPOINT, userId);
        let config = WS.buildAstrobinQueryParams(null);
        const response = await axios.get(astrobinUrl, config);
        return {
            id: response.data.id,
            username: response.data.username,
            avatar: response.data.avatar,
            about: response.data.about,
            website: response.data.website,
            job: response.data.job,
            language: response.data.language,
            image_count: response.data.image_count,
            followers_count: response.data.followers_count,
            following_count: response.data.following_count,
            received_likes_count:  response.data.received_likes_count
        }
    } catch (err) {
        const error = new Error(err.message);
        error.code = 500;
        throw error;
    }

};