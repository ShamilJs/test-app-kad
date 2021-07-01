import { InitiaStateType } from "../../Stores/appReduser";

import { ADD_FAVORITES_CITY,
    ERROR_ACTION, GET_CITY,
    INSTALL_FAVORITES_STATUS,
    SHOW_ALERT,
    SHOW_LOADER } from "../../Stores/actions";

type CoordType = {
    lon: number
    lat: number
}

type WeatherType = {
    id: number
    main: string
    description: string
    icon: string
}

type MainType = {
    temp: number
    pressure: number
    humidity: number
    temp_min: number
    temp_max: number
}

type WindType = {
    speed: number
    deg: number
}

type CloudsType = {
    all: number
}

type SysType = {
    type: number
    id: number
    message: number
    country: string
    sunrise: number
    sunset: number
}

export type cityType = {
    coord?: CoordType,
    weather?: WeatherType[]
    base?: string
    main?: MainType
    visibility?: number,
    wind?: WindType
    clouds?: CloudsType
    dt?: number,
    sys?: SysType
    id?: number
    name?: string
    cod: number
    message?: string
}

export type StateType = {
	app: InitiaStateType
}

export type CityAndLabelType = {
    value: string,
    label: string
}

export type GetCityStoreActionType = {
	type: typeof GET_CITY,
	payload: any
}

export type AddFavoritesCityActionType = {
	type: typeof ADD_FAVORITES_CITY,
	payload: {value: string, label: string}
}

export type InstallFavoritesStatusActionType = {
	type: typeof INSTALL_FAVORITES_STATUS,
	payload: boolean
}

export type ShowActionType = {
	type: typeof SHOW_LOADER | typeof SHOW_ALERT | typeof ERROR_ACTION,
	payload: boolean
}

export type ActionType = GetCityStoreActionType | AddFavoritesCityActionType |
    InstallFavoritesStatusActionType | ShowActionType;