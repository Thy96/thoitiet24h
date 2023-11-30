import React, { useEffect, useState } from "react";
import { useLocalStorageBoolean } from 'react-use-window-localstorage';
import './App.css'

import { useDispatch, useSelector } from "react-redux";

//Load API
import { loadCurrentWeathers } from './redux/actions/weatherCurrentAction'
import { loadForecastHourlyWeathers } from "./redux/actions/weatherForecastHourlyAction";

//Components
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer"

function App() {
  const defaultValue = true;
  const [idCity, setIdCity] = useState(1580578);
  const [showModalSetting, setShowModalSetting] = useState(false)
  const [openLightRain, setOpenLightRain] = useLocalStorageBoolean('changeWeather', defaultValue);

  const data = useSelector(state => state.weathersCurrent.data)
  const requesting = useSelector(state => state.weathersCurrent.requesting)

  const dataForecastHour = useSelector(state => state.weathersForecastHourly.data)
  const requestingForecastHour = useSelector(state => state.weathersForecastHourly.requesting)

  const handleChangeIdCity = (e) => {
    setIdCity(e.target.value);
  };

  const handleShowModalSetting = () => {
    setShowModalSetting(!showModalSetting)
  }

  const handleOpenLightRain = () => {
    setOpenLightRain(!openLightRain);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCurrentWeathers(idCity))
    dispatch(loadForecastHourlyWeathers(idCity))
  }, [idCity])

  return (
    <>
      <Header handleShowModalSetting={handleShowModalSetting} openLightRain={openLightRain} handleOpenLightRain={handleOpenLightRain}></Header>
      <Main idCity={idCity} handleChangeIdCity={handleChangeIdCity} data={data} requesting={requesting} dataForecastHour={dataForecastHour} requestingForecastHour={requestingForecastHour} handleShowModalSetting={handleShowModalSetting} showModalSetting={showModalSetting} openLightRain={openLightRain}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
