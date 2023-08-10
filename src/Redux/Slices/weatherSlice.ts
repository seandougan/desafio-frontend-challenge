import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface WeatherState {
    data: any;
}

export const initialState: WeatherState = {
    data: {},
};

export interface WeatherData {
    // Define your expected response data structure here
}

export const fetchWeather = createAsyncThunk<WeatherData, { latitude: number; longitude: number }>(
    'weather/fetchWeather',
    async ({ latitude, longitude }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.open-meteo.com/v1/gem?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            return response.data;
        } catch (error : any) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload;
            });
    },
});

export default weatherSlice.reducer;
