import { actions } from '../actions/actions';
import {defaultLocationKey, defaultLocationName} from "../../utils/common";

const initialState = {
    currentLocationKey: defaultLocationKey,
    currentLocationName: defaultLocationName,
    currentDailyForecast: [],
    currentConditions: {},
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case actions.SetLocationName: {
            return {
                ...state,
                currentLocationName: action.payload,
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
