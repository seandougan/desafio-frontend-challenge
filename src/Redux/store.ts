// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/reducer';

const store = configureStore({
    reducer: rootReducer
    // Add other configuration options if needed
});

export default store;
