import { ADD_FAVORITES_CITY,
    ERROR_ACTION,
	GET_CITY,
	INSTALL_FAVORITES_STATUS,
	SHOW_ALERT, SHOW_LOADER } from "./types";


type GetCityStoreActionType = {
    type: typeof GET_CITY,
    payload: any
}

type AddFavoritesCityActionType = {
    type: typeof ADD_FAVORITES_CITY,
    payload: {value: string, label: string}
}

type InstallFavoritesStatusActionType = {
    type: typeof INSTALL_FAVORITES_STATUS,
    payload: boolean
}

type ShowActionType = {
    type: typeof SHOW_LOADER | typeof SHOW_ALERT | typeof ERROR_ACTION,
    payload: boolean
}

export const getCityStore = (city: any): GetCityStoreActionType => {
    return {
        type: GET_CITY,
        payload: city
    };
};

export const addFavoritesCity = (city: string): AddFavoritesCityActionType => {
    return {
        type: ADD_FAVORITES_CITY,
        payload: {value: city, label: city}
    };
};

export const installFavoritesStatus = (status: boolean): InstallFavoritesStatusActionType => {
    return {
		type: INSTALL_FAVORITES_STATUS,
		payload: status
    };
};

export const showLoader = (status: boolean): ShowActionType => {
    return {
		type: SHOW_LOADER,
		payload: status
    };
};

export const showAlert = (status: boolean): ShowActionType => {
    return {
		type: SHOW_ALERT,
		payload: status
    };
};

export const showError = (status: boolean): ShowActionType => {
    return {
		type: ERROR_ACTION,
		payload: status
    };
};