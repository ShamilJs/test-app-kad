import { CREATE_COLLECTION_TO_DO, GET_CITY } from './types';

const initiaState = {
    city: {},
    
};



export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case GET_CITY: 
            return {...state, city: action.payload};
        default: return state;
    }
};