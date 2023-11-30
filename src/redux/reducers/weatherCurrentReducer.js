import { FETCH_CURRENT_WEATHER_REQUEST, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_CURRENT_WEATHER_ERROR } from '../constants/weatherCurrentConstant'

const initState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function weatherCurrentReducers(state = initState, payload) {
    switch (payload.type) {
        case FETCH_CURRENT_WEATHER_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_CURRENT_WEATHER_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case FETCH_CURRENT_WEATHER_ERROR:
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

export default weatherCurrentReducers