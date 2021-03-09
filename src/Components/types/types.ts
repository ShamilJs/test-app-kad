import { InitiaStateType } from "../../redux/appReduser";

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