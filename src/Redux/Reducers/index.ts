// reducers/index.ts
import { combineReducers } from 'redux';
import weatherReducer from '../Slices/weatherSlice';
// Import other reducer slices here

const rootReducer = combineReducers({
    weather: weatherReducer,
    // Add other slices here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
