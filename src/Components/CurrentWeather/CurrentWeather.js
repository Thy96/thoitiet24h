import React from 'react';
import classNames from 'classnames/bind';
import styles from './CurrentWeather.module.scss';
import images from '../../assets/img';
import CurrentDateTime from '../CurrentDateTime/CurrentDateTime';

const cx = classNames.bind(styles)

function CurrentWeather({ data, requesting, showOnTemp, showOnTime, dateformat, speedWind, preSsure, preCipiTation }) {
    const rains1h = ['1h']

    return (
        <>
            {
                (requesting ?
                    <>
                        <div className='App'>
                            <img src={images.loading} className="App-logo" alt="logo" />
                        </div>
                    </>
                    :

                    (data) ?
                        <>
                            <div className={cx('show-weather-list')}>
                                <div className={cx('show-weather-list-temp')}>
                                    <h2>{
                                        data.name === 'Tinh Binh GJinh' ? 'Tinh Binh Dinh' :
                                            data.name === 'Thanh Pho GJa Nang' ? 'Thanh Pho Da Nang' :
                                                data.name === 'GJak Lak Province' ? 'Tinh Dak Lak' :
                                                    data.name === 'Tinh GJong Nai' ? 'Tinh Dong Nai' :
                                                        data.name === 'Tinh GJong Thap' ? 'Tinh Dong Thap' :
                                                            data.name === 'Tinh Lam GJong' ? 'Tinh Lam Dong' :
                                                                data.name === 'Tinh Nam GJinh' ? 'Tinh Nam Dinh' :
                                                                    data.name === 'Ho Chi Minh City' ? 'Thanh Pho Ho Chi Minh' :
                                                                        data.name === 'Hanoi' ? 'Ha Noi' :
                                                                            data.name === 'Haiphong' ? 'Hai Phong' :
                                                                                data.name
                                    }</h2>
                                    <div className={cx('time-temperature-sky', 'flex', 'justify-between', 'align-end', 'flex-wrap')}>
                                        <div className={cx('date-time')}>
                                            <CurrentDateTime showOnTime={showOnTime} dateformat={dateformat}></CurrentDateTime>
                                        </div>
                                        {showOnTemp === false ?
                                            <div className={cx('temperature', 'temperature-pc')}>
                                                {(data.main.temp - 273.15).toFixed(0)}<sup>o</sup>C</div> :
                                            <div className={cx('temperature', 'temperature-pc')}>
                                                {((data.main.temp - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F</div>
                                        }

                                        <div className={cx('summary-info')}>
                                            {data.weather[0].icon === '01d' ? (<img src={images.weather_1} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '01n' ? (<img src={images.weather_1n} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '02d' ? (<img src={images.weather_2} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '02n' ? (<img src={images.weather_2n} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '03d' || data.weather[0].icon === '03n' ? (<img src={images.weather_3} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '04d' || data.weather[0].icon === '04n' ? (<img src={images.weather_4} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '09d' || data.weather[0].icon === '09n' ? (<img src={images.weather_5} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '10d' ? (<img src={images.weather_6} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '10n' ? (<img src={images.weather_6n} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '11d' || data.weather[0].icon === '11n' ? (<img src={images.weather_7} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '13d' || data.weather[0].icon === '13n' ? (<img src={images.weather_8} alt="logo weather" />) : ''}

                                            {data.weather[0].icon === '50d' || data.weather[0].icon === '50n' ? (<img src={images.weather_9} alt="logo weather" />) : ''}

                                            <p className={cx('text-summary')}>
                                                {data.weather[0].description === 'clear sky' ? 'Bầu trời quang đãng' :
                                                    data.weather[0].description === 'few clouds' ? 'Có mây' :
                                                        data.weather[0].description === 'scattered clouds' ? 'Mây rải rác' :
                                                            data.weather[0].description === 'broken clouds' ? 'Mây tan' :
                                                                data.weather[0].description === 'overcast clouds' ? 'Mây đen, u ám' :
                                                                    data.weather[0].description === 'shower rain' ? 'Mưa rào' :
                                                                        data.weather[0].description === 'light rain' ? 'Mưa nhỏ' :
                                                                            data.weather[0].description === 'moderate rain' ? 'Mưa vừa' :
                                                                                data.weather[0].description === 'rain' ? 'Mưa lớn' :
                                                                                    data.weather[0].description === 'thunderstorm' ? 'Dông, bảo tố có sấm sét' :
                                                                                        data.weather[0].description === 'snow' ? 'Tuyết' :
                                                                                            data.weather[0].description === 'mist' ? 'Sương mù' :
                                                                                                data.weather[0].description}
                                            </p>
                                        </div>
                                        {showOnTemp === false ?
                                            <div className={cx('temperature', 'temperature-sp')}>
                                                {(data.main.temp - 273.15).toFixed(0)}<sup>o</sup>C</div> :
                                            <div className={cx('temperature', 'temperature-sp')}>
                                                {((data.main.temp - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F</div>
                                        }
                                    </div>

                                </div>

                                <div className={cx('show-weather-list-info', 'flex', 'justify-between', 'align-start', 'flex-wrap')}>
                                    <dl>
                                        <dt><img alt="" src={images.detail_min_temp} /></dt>
                                        {showOnTemp === false ?
                                            <dd>
                                                {(data.main.temp_min - 273.15).toFixed(0)}<sup>o</sup>C
                                                <br /><span>Nhiệt độ thấp nhất</span>
                                            </dd> : <dd>
                                                {((data.main.temp_min - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F
                                                <br /><span>Nhiệt độ thấp nhất</span>
                                            </dd>
                                        }
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_max_temp} /></dt>
                                        {showOnTemp === false ?
                                            <dd>
                                                {(data.main.temp_max - 273.15).toFixed(0)}<sup>o</sup>C
                                                <br /><span>Nhiệt độ cao nhất</span>
                                            </dd> : <dd>
                                                {((data.main.temp_max - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F
                                                <br /><span>Nhiệt độ cao nhất</span>
                                            </dd>
                                        }
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_rain} /></dt>
                                        <dd>
                                            (Mưa) {
                                                (((data.main.temp - 273.15) * (data.wind.gust ? data.wind.gust : data.wind.deg) + data.main.humidity * data.clouds.all) / 100).toFixed(0)
                                            }%
                                            <br /><span>Khả năng mưa</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_windspeed} /></dt>
                                        <dd>
                                            {speedWind === 1 ? (data.wind.speed * 3.6).toFixed(2) + ' km/h' :
                                                speedWind === 2 ? (data.wind.speed).toFixed(2) + ' m/s' :
                                                    speedWind === 3 ? (data.wind.speed * 2.2369).toFixed(2) + ' mph' :
                                                        speedWind === 4 ? (data.wind.speed * 1.9438).toFixed(2) + ' knots' :
                                                            speedWind === 5 ? (data.wind.speed * 3.2808).toFixed(2) + ' ft/s' : ''}
                                            <br /><span>Tốc độ gió</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_wind_directio} /></dt>
                                        <dd>
                                            {data.wind.deg < 90 ? 'Bắc' :
                                                data.wind.deg < 180 ? 'Đông' :
                                                    data.wind.deg < 270 ? 'Nam' :
                                                        'Tây'
                                            }
                                            <br /><span>Hướng gió</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_cloud} /></dt>
                                        <dd>
                                            {data.clouds.all}%
                                            <br /><span>Mây che phủ</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_sunrise} /></dt>
                                        <dd>
                                            {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                                                hourCycle: 'h23',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })} AM
                                            <br /><span>Bình Minh</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_sunset} /></dt>
                                        <dd>
                                            {new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                                                hourCycle: 'h23',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })} PM
                                            <br /><span>Hoàng hôn</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_dew} /></dt>
                                        <dd>
                                            {data.visibility} m
                                            <br /><span>Tầm nhìn (sương mù)</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_uv} /></dt>
                                        <dd>
                                            1.59 (High)
                                            <br /><span>Chỉ số UV</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_humidity} /></dt>
                                        <dd>
                                            {data.main.humidity}%
                                            <br /><span>Độ ẩm</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_precipitation} /></dt>
                                        <dd>
                                            {/* {((data.main.pressure * data.main.humidity / 24).toFixed(0) / 10000)} in */}
                                            {preCipiTation === 1 ? data.weather[0].icon === '10d' ? (data.rain[rains1h]) + ' mm' : 0 + ' mm' :
                                                preCipiTation === 2 ? data.weather[0].icon === '10d' ? (data.rain[rains1h] * 0.0393700787).toFixed(2) + ' in' : 0 + ' in' : ''}
                                            <br /><span>Lượng mưa</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_feel_like} /></dt>
                                        {showOnTemp === false ?
                                            <dd>
                                                {(data.main.feels_like - 273.15).toFixed(0)}<sup>o</sup>C
                                                <br /><span>Cảm thấy</span>
                                            </dd>
                                            :
                                            <dd>
                                                {((data.main.feels_like - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F
                                                <br /><span>Cảm thấy</span>
                                            </dd>
                                        }
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_ozone} /></dt>
                                        <dd>
                                            {((data.main.sea_level ? data.main.sea_level : data.main.pressure) * (data.main.feels_like - 273.15) / (data.main.grnd_level ? data.main.grnd_level : 1000) * 3.5).toFixed(0)}
                                            <br /><span>Ozone</span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><img alt="" src={images.detail_pressure} /></dt>
                                        <dd>
                                            {preSsure === 1 ? ((data.main.pressure / 1000) * 1000).toFixed(0) + ' mbar' :
                                                preSsure === 2 ? ((data.main.pressure / 1000) * 29.5).toFixed(2) + ' inHg' :
                                                    preSsure === 3 ? ((data.main.pressure / 1000) * 1000).toFixed(2) + ' hPa' :
                                                        preSsure === 4 ? ((data.main.pressure / 1000) * 750).toFixed(2) + ' mmHg' : ''}
                                            <br /><span>Áp suất</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                        </>
                        : <div style={{ fontSize: '30px', textAlign: 'center', color: '#fff', width: '100%' }}>Trang Website đang được bảo trì<br />Xin vui lòng chờ trong giây lát<br /><img src={images.loading} className="App-logo" alt="logo" /></div>
                )
            }</>
    );
}

export default CurrentWeather;