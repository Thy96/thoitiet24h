import React from 'react';
import classNames from 'classnames/bind';
import styles from './ForecastHourWeather.module.scss';
import images from '../../assets/img';

const cx = classNames.bind(styles)

function ForecastHourWeather({ dataForecastHour, requestingForecastHour, showOnTemp, preCipiTation, preSsure }) {
    return (requestingForecastHour ?
        <>
            <div className='App'>
                <img src={images.loading} className="App-logo" alt="logo" />
            </div>
        </>
        :
        (dataForecastHour) ?
            <>
                <div className={cx('show-weather-list')}>
                    <h2 className={cx('title-hourly')}>
                        Thời tiết 24h tiếp theo - {
                            dataForecastHour.city.name === 'Tinh Binh GJinh' ? 'Tinh Binh Dinh' :
                                dataForecastHour.city.name === 'Thanh Pho GJa Nang' ? 'Thanh Pho Da Nang' :
                                    dataForecastHour.city.name === 'GJak Lak Province' ? 'Tinh Dak Lak' :
                                        dataForecastHour.city.name === 'Tinh GJong Nai' ? 'Tinh Dong Nai' :
                                            dataForecastHour.city.name === 'Tinh GJong Thap' ? 'Tinh Dong Thap' :
                                                dataForecastHour.city.name === 'Tinh Lam GJong' ? 'Tinh Lam Dong' :
                                                    dataForecastHour.city.name === 'Tinh Nam GJinh' ? 'Tinh Nam Dinh' :
                                                        dataForecastHour.city.name === 'Ho Chi Minh City' ? 'Thanh Pho Ho Chi Minh' :
                                                            dataForecastHour.city.name === 'Hanoi' ? 'Ha Noi' :
                                                                dataForecastHour.city.name === 'Haiphong' ? 'Hai Phong' :
                                                                    dataForecastHour.city.name}
                    </h2>
                    {dataForecastHour.list?.map((info, index) => (
                        <div key={index} className={cx('show-weather-list-box')}>
                            <div className={cx('date')}>
                                {(info.dt_txt).slice(0, 10).replaceAll("-", '/')}
                            </div>
                            <div className={cx('time-temp-day', 'flex', 'flex-wrap', 'justify-between', 'align-center')}>
                                <div className={cx('time', 'flex', 'flex-wrap', 'justify-start', 'align-center')}>
                                    <figure>
                                        {info.weather[0].icon === '01d' ? (<img src={images.weather_1} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '01n' ? (<img src={images.weather_1n} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '02d' ? (<img src={images.weather_2} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '02n' ? (<img src={images.weather_2n} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '03d' || info.weather[0].icon === '03n' ? (<img src={images.weather_3} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '04d' || info.weather[0].icon === '04n' ? (<img src={images.weather_4} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '09d' || info.weather[0].icon === '09n' ? (<img src={images.weather_5} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '10d' ? (<img src={images.weather_6} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '10n' ? (<img src={images.weather_6n} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '11d' || info.weather[0].icon === '11n' ? (<img src={images.weather_7} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '13d' || info.weather[0].icon === '13n' ? (<img src={images.weather_8} alt="logo weather" />) : ''}

                                        {info.weather[0].icon === '50d' || info.weather[0].icon === '50n' ? (<img src={images.weather_9} alt="logo weather" />) : ''}

                                    </figure>
                                    <div className={cx('hours-des')}>
                                        <p>{(info.dt_txt).slice(10).replace(':00:00', ':00')}</p>
                                        <p>{info.weather[0].description === 'clear sky' ? 'Bầu trời quang đãng' :
                                            info.weather[0].description === 'few clouds' ? 'Có mây' :
                                                info.weather[0].description === 'scattered clouds' ? 'Mây rải rác' :
                                                    info.weather[0].description === 'broken clouds' ? 'Mây tan' :
                                                        info.weather[0].description === 'overcast clouds' ? 'Mây đen, u ám' :
                                                            info.weather[0].description === 'shower rain' ? 'Mưa rào' :
                                                                info.weather[0].description === 'light rain' ? 'Mưa nhỏ' :
                                                                    info.weather[0].description === 'moderate rain' ? 'Mưa vừa' :
                                                                        info.weather[0].description === 'rain' ? 'Mưa lớn' :
                                                                            info.weather[0].description === 'thunderstorm' ? 'Dông, bảo tố có sấm sét' :
                                                                                info.weather[0].description === 'snow' ? 'Tuyết' :
                                                                                    info.weather[0].description === 'mist' ? 'Sương mù' :
                                                                                        info.weather[0].description}</p>
                                    </div>
                                </div>
                                <div className={cx('percent-rain')}><img alt='' src={images.detail_humidity_big} />{(info.pop * 100).toFixed(0)}%</div>
                                {
                                    showOnTemp === false ?
                                        <div className={cx('temp')}>{(info.main.temp - 273.15).toFixed(0)}<sup>o</sup>C</div>
                                        : <div className={cx('temp')}>{((info.main.temp - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F</div>
                                }
                            </div>

                            <div className={cx('list-info', 'flex', 'justify-between', 'align-start', 'flex-wrap')}>
                                <dl>
                                    <dt><img alt="" src={images.detail_humidity} /></dt>
                                    <dd>
                                        {info.main.humidity}%
                                        <br /><span>Độ ẩm</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><img alt="" src={images.detail_precipitation} /></dt>
                                    <dd>
                                        {preCipiTation === 1 ? info.rain === undefined ? 0 + ' mm' : (info.rain['3h']) + ' mm' :
                                            preCipiTation === 2 ? info.rain === undefined ? 0 + ' in' : (info.rain['3h'] * 0.039370).toFixed(2) + ' in' : ''
                                        }
                                        <br /><span>Lượng mưa</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><img alt="" src={images.detail_cloud} /></dt>
                                    <dd>
                                        {info.clouds.all}%
                                        <br /><span>Mây che phủ</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><img alt="" src={images.detail_sunrise} /></dt>
                                    <dd>
                                        {new Date(dataForecastHour.city.sunrise * 1000).toLocaleTimeString([], {
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
                                        {new Date(dataForecastHour.city.sunset * 1000).toLocaleTimeString([], {
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
                                        {info.visibility} m
                                        <br /><span>Tầm nhìn (sương mù)</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><img alt="" src={images.detail_feel_like} /></dt>
                                    {
                                        showOnTemp === false ?
                                            <dd>
                                                {(info.main.feels_like - 273.15).toFixed(0)}<sup>o</sup>C
                                                <br /><span>Cảm thấy</span>
                                            </dd> : <dd>
                                                {((info.main.feels_like - 273.15) * 1.8000 + 32.00).toFixed(0)}<sup>o</sup>F
                                                <br /><span>Cảm thấy</span>
                                            </dd>
                                    }
                                </dl>
                                <dl>
                                    <dt><img alt="" src={images.detail_ozone} /></dt>
                                    <dd>
                                        {((info.main.sea_level ? info.main.sea_level : info.main.pressure) * (info.main.feels_like - 273.15) / (info.main.grnd_level ? info.main.grnd_level : 1000) * 3.5).toFixed(0)}
                                        <br /><span>Ozone</span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><img alt="" src={images.detail_pressure} /></dt>
                                    <dd>
                                        {preSsure === 1 ? ((info.main.pressure / 1000) * 1000).toFixed(0) + ' mbar' :
                                            preSsure === 2 ? ((info.main.pressure / 1000) * 29.5).toFixed(2) + ' inHg' :
                                                preSsure === 3 ? ((info.main.pressure / 1000) * 1000).toFixed(2) + ' hPa' :
                                                    preSsure === 4 ? ((info.main.pressure / 1000) * 750).toFixed(2) + ' mmHg' : ''}
                                        <br /><span>Áp suất</span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    ))}

                </div>
            </>
            : <div style={{ fontSize: '30px', textAlign: 'center', color: '#fff', width: '100%' }}>Trang Website đang được bảo trì<br />Xin vui lòng chờ trong giây lát<br /><img src={images.loading} className="App-logo" alt="logo" /></div>
    );
}

export default ForecastHourWeather;