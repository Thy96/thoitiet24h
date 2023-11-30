import { FETCH_FORECAST_HOURLY_WEATHER_REQUEST, FETCH_FORECAST_HOURLY_WEATHER_SUCCESS, FETCH_FORECAST_HOURLY_WEATHER_ERROR } from '../constants/weatherForecastHourlyConstant'

const initState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function weatherForecastHourlyReducers(state = initState, payload) {
    switch (payload.type) {
        case FETCH_FORECAST_HOURLY_WEATHER_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_FORECAST_HOURLY_WEATHER_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case FETCH_FORECAST_HOURLY_WEATHER_ERROR:
            return {
                ...state,
                requesting: false,
                success: false,
                message: payload.message
            };
        default:
            return state;
    }
}

export default weatherForecastHourlyReducers