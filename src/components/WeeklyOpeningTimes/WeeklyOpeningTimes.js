// External, react, library, etc imports
import React, { useEffect, useState } from 'react';

// Internal global, context, etc
import {CHANGED_OPENING_TIMES_DATA} from './data/changedOpeningTimes';
import {momentDayToday, momentDateToday, momentDateIn7Days} from '../../libraries/moment/moment';

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

const WeeklyOpeningTimes = ({genderDataForCalendar, className}) => {
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
                            dayName={day.dayName}
                            openTime={day.openTime}
                            closeTime={day.closeTime}
                            open={day.open}
                        />
                    );
                })
            )}
		</ol>
	);
};

export default WeeklyOpeningTimes;

