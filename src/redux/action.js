import { ADD_FAVORITES_CITY,
	GET_CITY,
	INSTALL_FAVORITES_STATUS,
	SHOW_ALERT, SHOW_LOADER } from "./types";

export const getCityStore = city => {
    return {
        type: GET_CITY,
        payload: city
    };
};


export const addFavoritesCity = city => {
    return {
        type: ADD_FAVORITES_CITY,
        payload: {value: city, label: city}
    };
};

export const installFavoritesStatus = (status) => {
    return {
		type: INSTALL_FAVORITES_STATUS,
		payload: status
    };
};

export const showLoader = (status) => {
    return {
		type: SHOW_LOADER,
		payload: status
    };
};

export const showAlert = (status) => {
    return {
		type: SHOW_ALERT,
		payload: status
    };
};