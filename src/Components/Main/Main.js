import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import images from '../../assets/img';

//Pages
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';

//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const cx = classNames.bind(styles)

function Main({ idCity, handleChangeIdCity, data, requesting, dataForecastHour, requestingForecastHour, handleShowModalSetting, showModalSetting, openLightRain }) {

    const [showOnTemp, setShowOnTemp] = useState(false)
    const [showOnTime, setShowOnTime] = useState(false)
    const [dateformat, setDateFormat] = useState(1);
    const [speedWind, setSpeedWind] = useState(1);
    const [preSsure, setPreSsure] = useState(1);
    const [preCipiTation, setPreCipiTation] = useState(1);

    const handleShowOnTemp = () => {
        setShowOnTemp(!showOnTemp)
    }

    const handleShowOnTime = () => {
        setShowOnTime(!showOnTime)
    }

    const handleChangeDateFormat = (e) => {
        setDateFormat(e.target.value);
    };

    const handleChangeSpeedWind = (e) => {
        setSpeedWind(e.target.value);
    };

    const handleChangePreSsure = (e) => {
        setPreSsure(e.target.value);
    };

    const handleChangePreCipiTation = (e) => {
        setPreCipiTation(e.target.value);
    };

    return (
        <>
            <div className={cx('modal', showModalSetting ? 'show' : '')}>
                <button onClick={handleShowModalSetting} className={cx('close-modal')}>X</button>
                <h3>THIẾT LẬP ĐƠN VỊ</h3>
                <div className={cx('list-view')}>
                    <dl>
                        <dt><img alt="" src={images.detail_min_temp} /> Nhiệt độ</dt>
                        <dd>
                            <button onClick={handleShowOnTemp} className={cx(showOnTemp === false ? 'active' : '')}><sup>0</sup>C</button>
                            <button onClick={handleShowOnTemp} className={cx(showOnTemp === false ? '' : 'active')}><sup>0</sup>F</button>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img alt="" src={images.settings_time} /> Định dạng thời gian</dt>
                        <dd>
                            <button onClick={handleShowOnTime} className={cx(showOnTime === false ? 'active' : '')}>12</button>
                            <button onClick={handleShowOnTime} className={cx(showOnTime === false ? '' : 'active')}>24</button>
                        </dd>
                    </dl>

                    <dl>
                        <dt><img alt="" src={images.settings_date} /> Định dạng ngày tháng</dt>
                        <dd>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">MM/dd/yyyy</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={dateformat}
                                        label="Date"
                                        onChange={handleChangeDateFormat}
                                    >
                                        <MenuItem value={1}>MM/dd/yyyy</MenuItem>
                                        <MenuItem value={2}>MM.dd.yyyy</MenuItem>
                                        <MenuItem value={3}>MM-dd-yyyy</MenuItem>
                                        <MenuItem value={4}>MMM dd,yyyy</MenuItem>
                                        <MenuItem value={5}>dd MMM yyyy</MenuItem>
                                        <MenuItem value={6}>EEE, MMM dd</MenuItem>
                                        <MenuItem value={7}>EEE, dd MMM</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </dd>
                    </dl>

                    <dl>
                        <dt><img alt="" src={images.settings_wind} /> Tốc độ gió</dt>
                        <dd>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">MM/dd/yyyy</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={speedWind}
                                        value={speedWind}
                                        label="SpeedWind"
                                        onChange={handleChangeSpeedWind}
                                    >
                                        <MenuItem value={1}>km/h</MenuItem>
                                        <MenuItem value={2}>m/s</MenuItem>
                                        <MenuItem value={3}>mph</MenuItem>
                                        <MenuItem value={4}>knots</MenuItem>
                                        <MenuItem value={5}>ft/s</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </dd>
                    </dl>

                    <dl>
                        <dt><img alt="" src={images.detail_pressure} /> Áp suất</dt>
                        <dd>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">mbar</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={preSsure}
                                        label="PreSsure"
                                        onChange={handleChangePreSsure}
                                    >
                                        <MenuItem value={1}>mbar</MenuItem>
                                        <MenuItem value={2}>inHg</MenuItem>
                                        <MenuItem value={3}>hPa</MenuItem>
                                        <MenuItem value={4}>mmHg</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </dd>
                    </dl>

                    <dl>
                        <dt><img alt="" src={images.detail_precipitation} /> Lượng mưa</dt>
                        <dd>
                            <Box>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">mbar</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={preCipiTation}
                                        label="Precipitation"
                                        onChange={handleChangePreCipiTation}
                                    >
                                        <MenuItem value={1}>mm</MenuItem>
                                        <MenuItem value={2}>in</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </dd>
                    </dl>
                </div>
                <div style={{ textAlign: 'center', background: '#454545' }}>
                    <button onClick={handleShowModalSetting} className={cx('submit-setup')}>Thiết lập</button>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<Home idCity={idCity} handleChangeIdCity={handleChangeIdCity} data={data} requesting={requesting} dataForecastHour={dataForecastHour} requestingForecastHour={requestingForecastHour} showOnTemp={showOnTemp} showOnTime={showOnTime} dateformat={dateformat} speedWind={speedWind} preSsure={preSsure} preCipiTation={preCipiTation} openLightRain={openLightRain}></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
            </Routes>
        </>
    );
}

export default Main;