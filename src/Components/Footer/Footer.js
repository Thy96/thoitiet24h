import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '../../assets/img';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const cx = classNames.bind(styles)

function Footer(props) {
    return (
        <>
            <footer>
                <div className={cx('wrapper', 'flex', 'justify-between', 'align-start', 'flex-wrap')}>
                    <div className={cx('logo-footer')}>
                        <Link to='/'><img src={images.logo} alt='logo 24h' /></Link>
                        <p>Thoitiet24h liên tục cập nhật các dự báo thời tiết 24/7 chính xác và chi tiết. Đồng thời, đây là nơi cung cấp các thông tin hữu ích liên quan đến thời tiết.</p>
                    </div>
                    <div className={cx('link-archor')}>
                        <h3>Liên kết hữu ích</h3>
                        <ul>
                            <li><a href="https://thoitiet24h.vn/theo-gio" target="_blank" rel="noreferrer">Thời tiết hàng giờ</a></li>
                            <li><a href="https://thoitiet24h.vn/hom-nay" target="_blank" rel="noreferrer">Thời tiết hôm nay</a></li>
                            <li><a href="https://thoitiet24h.vn/theo-ngay" target="_blank" rel="noreferrer">Thời tiết ngày mai</a></li>
                            <li><a href="https://thoitiet24h.vn/tin-tuc" target="_blank" rel="noreferrer">Tin thời tiết</a></li>
                        </ul>
                    </div>
                    <div className={cx('link-app')}>
                        <h3>Ứng dụng</h3>
                        <ul>
                            <li>
                                <a href="https://itunes.apple.com/us/app/weather-weather-forecast/id1363846787?l=vi&amp;ls=1&amp;mt=8" target="_blank" rel="noreferrer">
                                    <img data-original="https://admin.thoitiet24h.vn/images/app_download_appstore@2x.png" alt="App download appstore" src="https://admin.thoitiet24h.vn/images/app_download_appstore@2x.png" />
                                </a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.weather.forecast.weatherchannel" target="_blank" rel="noreferrer">
                                    <img data-original="https://admin.thoitiet24h.vn/images/app_download_googleplay@2x.png" alt="App download googleplay" src="https://admin.thoitiet24h.vn/images/app_download_googleplay@2x.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('link-social')}>
                        <h3>Mạng xã hội</h3>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/tintucthoitiet24h" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.ic_facebook} alt="ic_facebook" /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thoitiet24h/" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.ic_linkedin} alt="ic_linkedin" /></a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/thoitiet24h/_saved/" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.ic_pinterest} alt="ic_pinterest" /></a>
                            </li>
                            <li>
                                <a href="https://www.tumblr.com/blog/view/thoitiet24hvn" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.ic_tumblr} alt="ic_tumblr" /></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/thoitiet24hvn" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.ic_twitter} alt="ic_twitter" /></a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@thoitiet24h_vn" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.tiktok_new} alt="ic_tiktok" /></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/thoitiet24h.vn/" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.ic_insta} alt="insta" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/c/thoitiet24hvn/" target="_blank" rel="noreferrer">
                                    <img loading="lazy" width="30" height="30" src={images.youtube} alt="youtube" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <ScrollToTop></ScrollToTop>
        </>
    );
}

export default Footer;