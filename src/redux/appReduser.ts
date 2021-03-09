import { CityAndLabelType, cityType } from '../Components/types/types';
import { ADD_FAVORITES_CITY,
    ERROR_ACTION,
    GET_CITY,
    INSTALL_FAVORITES_STATUS,
    SHOW_ALERT, SHOW_LOADER } from './types';


const initiaState = {
    city: {} as cityType,
    cities: JSON.parse(localStorage.getItem('cityes') as string) || [] as CityAndLabelType | Array<null>,
    favorites: false as boolean,
    loader: false as boolean,
    alert: false as boolean,
    error: false as boolean
};

export type InitiaStateType = typeof initiaState


export const appReduser = (state = initiaState, action: any): InitiaStateType => {
    let city: Array<CityAndLabelType>;
    switch (action.type) {
        case GET_CITY: 
            city = state.cities.find((item: CityAndLabelType) => item.label === action.payload.name);
            if (city) state.favorites = true;
            state.city = action.payload;
            return state;
        case ADD_FAVORITES_CITY:
            city = state.cities.find((item: CityAndLabelType) => item.label === action.payload.label);
            if (!city) {
                state.cities.push(action.payload);
                state.favorites = true;
            } else {
                state.cities.forEach((item: CityAndLabelType, i: number) => {
                    if (item.label === action.payload.label) state.cities.splice(i, 1);
                })
                state.favorites = false
            }
            return state;
        case INSTALL_FAVORITES_STATUS:
            state.favorites = action.payload;
            return state;
        case SHOW_LOADER:
            return {...state, loader: action.payload};
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        case ERROR_ACTION:
            return {...state, error: action.payload};
        default: return state;
    }
};