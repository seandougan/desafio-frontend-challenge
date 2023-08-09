
import { Reducer } from 'redux';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "../Actions/actionTypes"

interface AppState {
    data: any[];
    error: string | null;
}

const initialState: AppState = {
    data: [],
    error: null
};

const rootReducer: Reducer<AppState> = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;
