import { combineReducers } from 'redux'
import weatherCurrentReducer from './weatherCurrentReducer'
import weatherForecastHourlyReducer from './weatherForecastHourlyReducer'

const reducers = combineReducers({
    weathersCurrent: weatherCurrentReducer,
    weathersForecastHourly: weatherForecastHourlyReducer
})

export default (state, action) => reducers(state, action)