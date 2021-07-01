import { Dispatch } from "react";

import WeatherService from "../ApiServices/WeatherService";

import { ActionType,
	AddFavoritesCityActionType,
	GetCityStoreActionType,
	InstallFavoritesStatusActionType,
	ShowActionType } from "../Shared/types/types";

export const GET_CITY = 'GET_CITY';

export const getCityStore = (city: any): GetCityStoreActionType => {
	return {
		type: GET_CITY,
		payload: city
	};
};

export const ADD_FAVORITES_CITY = 'ADD_FAVORITES_CITY';

export const addFavoritesCity = (city: string): AddFavoritesCityActionType => {
	return {
		type: ADD_FAVORITES_CITY,
		payload: {value: city, label: city}
	};
};

export const INSTALL_FAVORITES_STATUS = 'INSTALL_FAVORITES_STATUS';

export const installFavoritesStatus = (status: boolean): InstallFavoritesStatusActionType => {
	return {
		type: INSTALL_FAVORITES_STATUS,
		payload: status
	};
};

export const SHOW_LOADER = 'SHOW_LOADER';

export const showLoader = (status: boolean): ShowActionType => {
	return {
		type: SHOW_LOADER,
		payload: status
	};
};

export const SHOW_ALERT = 'SHOW_ALERT';

export const showAlert = (status: boolean): ShowActionType => {
	return {
		type: SHOW_ALERT,
		payload: status
	};
};

export const ERROR_ACTION = 'ERROR_ACTION';

export const showError = (status: boolean): ShowActionType => {
	return {
		type: ERROR_ACTION,
		payload: status
	};
};

export const getCityGeolocation = 
	(longitude: number, latitude: number) => (dispatch: Dispatch<ActionType>) => {
		dispatch(showLoader(true));
		dispatch(showError(false));

		return WeatherService.getCityGeolocation(longitude, latitude)
			.then(res => dispatch(getCityStore(res)))
			.catch(() => dispatch(showError(true)))
			.finally(() => dispatch(showLoader(false)))
};

export const getCity = (text: string, cityInFavorites: boolean) =>
	(dispatch: Dispatch<ActionType>) => {
		dispatch(showLoader(true));
		dispatch(showError(false));

		return WeatherService.getCity(text)
			.then((res: any) => {
				if (res.message) {
					dispatch(showAlert(true));
					return;
				}
				dispatch(showAlert(false));
				dispatch(getCityStore(res));

				if (cityInFavorites) dispatch(installFavoritesStatus(true));
				else dispatch(installFavoritesStatus(false));
			})
			.catch(() => dispatch(showError(true)))
			.finally(() => dispatch(showLoader(false)))
};