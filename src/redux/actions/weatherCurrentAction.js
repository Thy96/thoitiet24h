import { FETCH_CURRENT_WEATHER_REQUEST, FETCH_CURRENT_WEATHER_SUCCESS, FETCH_CURRENT_WEATHER_ERROR } from '../constants/weatherCurrentConstant'

export const loadCurrentWeathers = (idCity) => async dispatch => {
    try {
        dispatch({ type: FETCH_CURRENT_WEATHER_REQUEST })

        let url;
        if (idCity === '') {
            url = `https://api.openweathermap.org/data/2.5/weather?id=1580578&appid=afea2e2774f847eba733ef37e65518c4`;
        } else {
            url = `https://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=afea2e2774f847eba733ef37e65518c4`;
        }

        const res = await fetch(url)
        const resBody = await res.json()

        dispatch({
            type: FETCH_CURRENT_WEATHER_SUCCESS,
            data: resBody
        })
    } catch (error) {
        console.log(error);

        dispatch({
            type: FETCH_CURRENT_WEATHER_ERROR,
            message: error
        })
    }
}