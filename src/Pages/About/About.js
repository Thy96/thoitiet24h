import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss'
import images from '../../assets/img';

const cx = classNames.bind(styles)

function About() {
    return (
        <>
            <main className={cx('about-page')}>
                <div className='wrapper'>
                    <figure><img src={images.about_img} alt='' /></figure>
                    <h2 className={cx('title')}>Thoitiet24h.vn là 1 trong những trang dự báo thời tiết nhanh, chính xác nhất hiện nay. Trang web sở hữu hàng triệu người dùng Việt Nam truy cập theo dõi tin tức thời tiết mỗi ngày.</h2>

                    <ul className={cx('list')}>
                        <li>- Sở hữu hệ thống siêu máy tính có tốc độ khả năng thu thập và xử lý hàng triệu thông tin từ trạm quan trắc, vệ tinh, tàu thuyền…., các dự báo thời tiết được đưa ra có độ chính xác cao.</li>
                        <li>- Người dùng có thể cập nhật các tin tức thời tiết thời gian ngắn và dài hạn một cách chi tiết và cụ thể như dự báo thời tiết hàng giờ, thoi tiet ngay mai, thời tiết cuối tuần này, thời tiết 7 ngày tới,...</li>
                        <li>- Không chỉ vậy, Thoitiet24h.vn còn cung cấp tin tức thời tiết 63 tỉnh thành trên toàn quốc. Người dùng dễ dàng tìm kiếm thời tiết Thái Bình hàng giờ, thời tiết Hà Nội ngày mai theo giờ, dự báo thời tiết Hồ Chí Minh… tại trang web.</li>
                        <li>- Thoitiet24h có giao diện thân thiện, đơn giản giúp cho mọi người có thể sử dụng và hiểu các thông số thời tiết dễ dàng. Đặc biệt, website được tối ưu, tương thích với hầu hết các thiết bị.</li>
                        <li>- Nhờ đó, việc cập nhật dự báo thời tiết với Thoitiet24h.vn luôn dễ dàng và thuận tiện. Truy cập trang web thường xuyên sẽ giúp bạn nắm được tình hình thời tiết, lên kế hoạch học tập và làm việc khoa học và phù hợp.</li>
                    </ul></div>
            </main>
        </>
    );
}

export default About;