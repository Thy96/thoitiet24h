import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CurrentDateTime.module.scss';

const cx = classNames.bind(styles)

function CurrentDateTime({ showOnTime, dateformat }) {
    // Create Date Time
    const [current, setCurrent] = useState(new Date())
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const hours24 = current.getHours()
    const hours12 = ((hours24 % 12) || 12)
    const minutes = (current.getMinutes() < 10 ? '0' + current.getMinutes() : current.getMinutes())
    const currentDay = current.getDay()
    const currentDate = current.getDate()
    const currentMonth = (current.getMonth() + 1)
    const currentFullYear = current.getFullYear()

    // Format Month short
    const formatter = new Intl.DateTimeFormat('fr', { month: 'short' });
    const currentMonthShort = formatter.format(new Date()).replace('.', '');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <p>{
                dateformat === 1 ? currentDate + '/' + currentMonth + '/' + currentFullYear :
                    dateformat === 2 ? currentDate + '.' + currentMonth + '.' + currentFullYear :
                        dateformat === 3 ? currentDate + '-' + currentMonth + '-' + currentFullYear :
                            dateformat === 4 ? currentMonthShort + ' ' + currentDate + ',' + currentFullYear : dateformat === 5 ? currentDate + ' ' + currentMonthShort + ' ' + currentFullYear :
                                dateformat === 6 ? dayNames[currentDay] + ', ' + currentMonthShort + ' ' + currentDate :
                                    dateformat === 7 ? dayNames[currentDay] + ', ' + currentDate + ' ' + currentMonthShort : ''
            }</p>
            <p className={cx('time-hour')}>{showOnTime === !false ? hours24 + ':' + minutes : hours12 + ':' + minutes}
                {current.getHours() > 12 ?
                    <span>PM</span> :
                    <span>AM</span>
                }
            </p>
        </>
    );
}

export default CurrentDateTime;