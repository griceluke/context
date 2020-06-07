// External, react, library, etc imports
import React, { useEffect, useState } from 'react';

// Internal global, context, etc
import breakpoints from '../../styles/breakpoints';
import { CHANGED_OPENING_TIMES_DATA } from './data/changedOpeningTimes';
import { momentDayToday, momentDateToday, momentDateIn7Days } from '../../libraries/moment/moment';
import useWindowSize from '../../hooks/useWindowSize';

// Website, function/hooks, etc imports
import OpeningTimesByDay from '../OpeningTimesByDay';

const getAlternativeTimesForTheFollowing7Days = (genderDataForCalendar) => {
    const alternativeOpeningTimesThisWeek = [];

    (genderDataForCalendar && CHANGED_OPENING_TIMES_DATA ) && (
        CHANGED_OPENING_TIMES_DATA.forEach((dateWithCHANGED_OPENING_TIMES_DATA, i) => {
            ((momentDateToday <= dateWithCHANGED_OPENING_TIMES_DATA.date) && (momentDateIn7Days > dateWithCHANGED_OPENING_TIMES_DATA.date) && (dateWithCHANGED_OPENING_TIMES_DATA.gender === genderDataForCalendar.id)) && (
                alternativeOpeningTimesThisWeek.push(dateWithCHANGED_OPENING_TIMES_DATA)
            )
               
        })
    )
    return alternativeOpeningTimesThisWeek;
}

const setNewWeekCalendar = (genderDataForCalendar) => {
    const alternativeOpeningTimesThisWeek = getAlternativeTimesForTheFollowing7Days(genderDataForCalendar);
    if (alternativeOpeningTimesThisWeek.length > 0 ) {
        if (genderDataForCalendar) {
            const originalOpeningTimes = genderDataForCalendar.openingTimes;
            return originalOpeningTimes.map(obj => alternativeOpeningTimesThisWeek.find(o => o.dayNumber === obj.dayNumber) || obj);
        }
    }
    if (genderDataForCalendar) {
        return genderDataForCalendar.openingTimes;
    }
}

const WeeklyOpeningTimes = ({className, genderDataForCalendar}) => {
    const { width: currentWidth } = useWindowSize();
    const [width, setWidth] = useState(currentWidth);
    const isMobile = width < breakpoints.navigation.up;
    useEffect(() => {
		if (currentWidth !== width) {
			setWidth(currentWidth);
		}
    }, [currentWidth, width]);
    
    const [weekCalendar, setWeekCalendar] = useState([]);
    useEffect(() => {
		setWeekCalendar(setNewWeekCalendar(genderDataForCalendar));
    }, [genderDataForCalendar]);
	return (
		<ol className={className}>
			{weekCalendar && (
                weekCalendar.map((day, index) => {
                    const dayUniqueKey = `DAY_${index}`;

                    return (
                        <OpeningTimesByDay
                            key={dayUniqueKey} 
                            className={(day.dayNumber === momentDayToday) ? 'today' : ''}
                            timesAdjusted={(day.date) ? true : false}
                            dayName={(isMobile) ? (day.dayName.substring(0, 3)) : (day.dayName)}
                            openTime={day.openTime}
                            closeTime={day.closeTime}
                            open={day.open}
                            isMobile={isMobile}
                        />
                    );
                })
            )}
		</ol>
	);
};

export default WeeklyOpeningTimes;

