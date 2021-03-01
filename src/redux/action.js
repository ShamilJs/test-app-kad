import { GET_CITY } from "./types";

export const getCityStore = city => {
    return {
        type: GET_CITY,
        payload: city
    };
};