import React from 'react';
import { getDateStringByTimeZone, getTimeStringByTimeZone } from '../helpers/AppHelpers';

export default function DateDetails({ current }) {

    const { timezone } = current || {};
    const date = getDateStringByTimeZone(timezone);
    const time = getTimeStringByTimeZone(timezone);

    return (
        <>
            <h5>{date}</h5>
            <h5>{time}</h5>
        </>
    )
}