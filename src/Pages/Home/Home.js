import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Box from '@mui/material/Box';
//Selects
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//Tabs
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

//Component
import CurrentWeather from '../../Components/CurrentWeather/CurrentWeather';
import ForecastHourWeather from '../../Components/ForecastHourWeather/ForecastHourWeather';
import ClockTime from '../../Components/Clock/Clock';

const cx = classNames.bind(styles)

function Home({ idCity, handleChangeIdCity, data, requesting, dataForecastHour, requestingForecastHour, showOnTemp, showOnTime, dateformat, speedWind, preSsure, preCipiTation, openLightRain }) {

    const [value, setValue] = useState('1');

    const handleChangeTime = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <main className={cx('home-page', openLightRain ? 'rain' : 'light')}>
                <div className={cx('wrapper', 'flex', 'justify-between', 'align-start', 'flex-wrap')}>
                    <div className={cx('select-position')}>
                        <h2>Khu Vực</h2>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Hồ Chí Minh</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={idCity}
                                    label="City"
                                    onChange={handleChangeIdCity}
                                >
                                    <MenuItem value={1594446}>An Giang</MenuItem>
                                    <MenuItem value={1562414}>Bà Rịa - Vũng Tàu</MenuItem>
                                    <MenuItem value={1905675}>Bạc Liêu</MenuItem>
                                    <MenuItem value={1905669}>Bắc Kạn</MenuItem>
                                    <MenuItem value={1905419}>Bắc Giang</MenuItem>
                                    <MenuItem value={1905412}>Bắc Ninh</MenuItem>
                                    <MenuItem value={1587974}>Bến Tre</MenuItem>
                                    <MenuItem value={1905475}>Bình Dương</MenuItem>
                                    <MenuItem value={1587871}>Bình Định</MenuItem>
                                    <MenuItem value={1905480}>Bình Phước</MenuItem>
                                    <MenuItem value={1581882}>Bình Thuận</MenuItem>
                                    <MenuItem value={1905678}>Cà Mau</MenuItem>
                                    <MenuItem value={1586182}>Cao Bằng</MenuItem>
                                    <MenuItem value={1581188}>Cần Thơ</MenuItem>
                                    <MenuItem value={1586151}>Cao Lãnh</MenuItem>
                                    <MenuItem value={1905468}>Ðà Nẵng</MenuItem>
                                    <MenuItem value={1584169}>Ðắk Lắk</MenuItem>
                                    <MenuItem value={1905099}>Ðiện Biên</MenuItem>
                                    <MenuItem value={1582720}>Đồng Nai</MenuItem>
                                    <MenuItem value={1582562}>Đồng Tháp</MenuItem>
                                    <MenuItem value={1584071}>Đà Lạt</MenuItem>
                                    <MenuItem value={1581088}>Gia Lai</MenuItem>
                                    <MenuItem value={1581030}>Hà Giang</MenuItem>
                                    <MenuItem value={1905637}>Hà Nam</MenuItem>
                                    <MenuItem value={1581129}>Hà Nội</MenuItem>
                                    <MenuItem value={1580700}>Hà Tĩnh</MenuItem>
                                    <MenuItem value={1905686}>Hải Dương</MenuItem>
                                    <MenuItem value={1581297}>Hải Phòng</MenuItem>
                                    <MenuItem value={1572594}>Hòa Bình</MenuItem>
                                    <MenuItem value={1580578}>Hồ Chí Minh</MenuItem>
                                    <MenuItem value={1905699}>Hưng Yên</MenuItem>
                                    <MenuItem value={1579634}>Khánh Hòa</MenuItem>
                                    <MenuItem value={1579008}>Kiên Giang</MenuItem>
                                    <MenuItem value={1565088}>Kon Tum</MenuItem>
                                    <MenuItem value={1562412}>Lào Cai</MenuItem>
                                    <MenuItem value={1576632}>Lạng Sơn</MenuItem>
                                    <MenuItem value={1577882}>Lâm Đồng</MenuItem>
                                    <MenuItem value={1575788}>Long An</MenuItem>
                                    <MenuItem value={1905626}>Nam Ðịnh</MenuItem>
                                    <MenuItem value={1559969}>Nghệ An</MenuItem>
                                    <MenuItem value={1905516}>Quảng Nam</MenuItem>
                                    <MenuItem value={1568769}>Quảng Ngãi</MenuItem>
                                    <MenuItem value={1568758}>Quảng Ninh</MenuItem>
                                    <MenuItem value={1568733}>Quảng Trị</MenuItem>
                                    <MenuItem value={1559972}>Sóc Trăng</MenuItem>
                                    <MenuItem value={1567643}>Sơn La</MenuItem>
                                    <MenuItem value={1566557}>Tây Ninh</MenuItem>
                                    <MenuItem value={1566338}>Thái Bình</MenuItem>
                                    <MenuItem value={1905497}>Thái Nguyên</MenuItem>
                                    <MenuItem value={1566165}>Thanh Hóa</MenuItem>
                                    <MenuItem value={1565033}>Thừa Thiên-Huế</MenuItem>
                                    <MenuItem value={1564676}>Tiền Giang</MenuItem>
                                    <MenuItem value={1559975}>Trà Vinh</MenuItem>
                                    <MenuItem value={1559976}>Tuyên Quang</MenuItem>
                                    <MenuItem value={1559977}>Vĩnh Long</MenuItem>
                                    <MenuItem value={1905856}>Vĩnh Phúc</MenuItem>
                                    <MenuItem value={1559978}>Yên Bái</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <ClockTime></ClockTime>
                    </div>

                    <div className={cx('show-weather')}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChangeTime} aria-label="lab API tabs example">
                                        <Tab label="Hiện Tại" value="1" />
                                        <Tab label="Thời Tiết Theo Ngày & Giờ" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">{<CurrentWeather data={data} requesting={requesting} showOnTemp={showOnTemp} showOnTime={showOnTime} dateformat={dateformat} speedWind={speedWind} preSsure={preSsure} preCipiTation={preCipiTation}></CurrentWeather>}</TabPanel>
                                <TabPanel value="2">{<ForecastHourWeather dataForecastHour={dataForecastHour} requestingForecastHour={requestingForecastHour} showOnTemp={showOnTemp} preCipiTation={preCipiTation} preSsure={preSsure}></ForecastHourWeather>}</TabPanel>
                            </TabContext>
                        </Box>

                    </div>

                </div>
            </main>
        </>
    );
}

export default Home;