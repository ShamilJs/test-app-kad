import { ADD_FAVORITES_CITY,
    ERROR_ACTION,
    GET_CITY,
    INSTALL_FAVORITES_STATUS,
    SHOW_ALERT, SHOW_LOADER } from './types';

const initiaState = {
    city: {},
    cities: JSON.parse(localStorage.getItem('cityes')) || [],
    favorites: false,
    loader: false,
    alert: false,
    error: false
};


export const appReduser = (state = initiaState, action) => {
    let city;
    switch (action.type) {
        case GET_CITY: 
            city = state.cities.find(item => item.label === action.payload.name);
            if (city) state.favorites = true;
            state.city = action.payload;
            return state;
        case ADD_FAVORITES_CITY:
            city = state.cities.find(item => item.label === action.payload.label);
            if (!city) {
                state.cities.push(action.payload);
                state.favorites = true;
            } else {
                state.cities.forEach((item, i) => {
                    if (item.label === city.label) state.cities.splice(i, 1);
                })
                state.favorites = false;
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