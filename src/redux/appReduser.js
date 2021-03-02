import { ADD_FAVORITES_CITY,
    GET_CITY,
    INSTALL_FAVORITES_STATUS,
    SHOW_ALERT, SHOW_LOADER } from './types';

const initiaState = {
    city: {},
    cities: JSON.parse(localStorage.getItem('cityes')),
    favorites: false,
    loader: false,
    alert: false
    
};


export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case GET_CITY: 
            return {...state, city: action.payload};
        case ADD_FAVORITES_CITY:
            let city = state.cities.find(item => item.label === action.payload.label);
            if (!city) {
                state.cities.push(action.payload);
                state.favorites = true;
            } else {
                state.cities.splice(action.payload, 1);
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
        default: return state;
    }
};