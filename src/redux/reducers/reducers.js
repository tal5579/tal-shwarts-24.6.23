import { actions } from '../actions/actions';
import {defaultLocationKey} from "../../utils/common";

const initialState = {
    searchData: [],
    currentDailyForecast: [],
    currentLocationKey: defaultLocationKey,
    currentConditions: [],
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SetSearchData: {
            return {
                ...state,
                searchData: action.payload,
            };
        }

        case actions.SetDailyForecast: {
            return {
                ...state,
                currentDailyForecast: action.payload,
            };
        }

        case actions.SetLocationKey: {
            return {
                ...state,
                currentLocationKey: action.payload,
            }
        }

        case actions.SetCurrentConditions: {
            return {
                ...state,
                currentConditions: action.payload,
            }
        }
        
        default:
            return state;
    }
};
