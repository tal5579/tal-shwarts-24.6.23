import { actions } from '../actions/actions';

const initialState = {
    data: [],
    favorites: []
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GetData: {
            return {
                ...state,
            };
        }

        case actions.SetData: {
            return {
                ...state,
            };
        }
        
        default:
            return state;
    }
};
