import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets/img';
import { FaCloudSun, FaCloudSunRain } from "react-icons/fa";

const cx = classNames.bind(styles)

function Header({ handleShowModalSetting, openLightRain, handleOpenLightRain }) {

    // Add ClassName Active In Navlink
    let menu_active = ({ isActive }) => (isActive ? "active-menu" : "");

    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrollHead, setScrollHead] = useState(false);
    const [autoWidth, setAutoWidth] = useState(false);

    const handleClickToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollHead(true);
            } else {
                setScrollHead(false);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth < 767) {
                setAutoWidth(true);
            } else {
                setAutoWidth(false);
            }
        });
    }, []);

    return (
        <>
            <header className={cx('head', toggleMenu ? 'fixed' : '', scrollHead ? 'scroll-head' : '', autoWidth ? 'auto-width' : '')}>
                <div className={cx('wrapper', 'flex', 'justify-between', 'align-center')}>
                    <div className='flex align-center'>
                        <h1 className={cx('logo')}><Link to='/'><img src={images.logo} alt='logo 24h' /></Link></h1>
                        <ul className={cx('nav-menu', 'flex', 'justify-between')}>
                            <li><NavLink to='/' className={menu_active}>Trang Chủ</NavLink></li>
                            <li><NavLink to='/about' className={menu_active}>Giới Thiệu</NavLink></li>
                        </ul>
                    </div>
                    <div className={cx('setting', 'flex', 'justify-between', 'align-center')}>
                        <button onClick={handleOpenLightRain}>
                            {
                                openLightRain ? <FaCloudSun className='fa-light'></FaCloudSun> : <FaCloudSunRain className='fa-rain'></FaCloudSunRain>
                            }
                        </button>
                        <button onClick={handleShowModalSetting}><img src={images.setting} alt='' /></button>
                    </div>
                    <button
                        onClick={handleClickToggleMenu}
                        className={cx("btn-toggle", toggleMenu ? "active-button" : "")}
                    >
                        <span className={cx("line", "line1")}></span>
                        <span className={cx("line", "line2")}></span>
                        <span className={cx("line", "line3")}></span>
                    </button>
                </div>

                <div className={cx(toggleMenu ? "show-menu" : "hidden-menu")}>
                    {toggleMenu ? (
                        <nav className={cx("sp-menu")}>
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={handleClickToggleMenu}
                                    className={menu_active}
                                >
                                    Trang Chủ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={handleClickToggleMenu}
                                    className={menu_active}
                                >
                                    Giới Thiệu
                                </NavLink>
                            </li>
                        </nav>
                    ) : (
                        <></>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;