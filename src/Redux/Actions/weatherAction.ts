
import { Dispatch } from 'redux';
import axios from 'axios';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actionTypes';
import {WeatherActionInput} from "../../Types/Models/WeatherActionInput";

export const fetchDataSuccess = (data: any) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    };
};

export const fetchDataError = (error: string) => {
    return {
        type: FETCH_DATA_ERROR,
        payload: error
    };
};

export const fetchData = ({longitude, latitude}:WeatherActionInput) => {
    return (dispatch: Dispatch) => {
        axios.get(`https://api.open-meteo.com/v1/gem?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then(response => {
                dispatch(fetchDataSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchDataError(error.message));
            });
    };
};
