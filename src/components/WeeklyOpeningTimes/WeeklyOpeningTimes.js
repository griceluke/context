// External, react, library, etc imports
import React, { useContext, useEffect, useState } from 'react';

// Internal global, context, etc
import { GenderDataContext } from '../genderContext/genderDataContext';
import datesWithAlternateOpeningTimes from './data/changedOpeningTimes';
import {momentDayToday, momentDateToday, momentDateIn7Days} from '../../libraries/moment/moment';

// Website, function/hooks, etc imports
// NA ATM

const WeeklyOpeningTimes = () => {
	const { currentGenderData } = useContext(GenderDataContext);
    const [weekCalendar, setWeekCalendar] = useState([]);

    useEffect(() => {
        const getAlternativeTimesForTheFollowing7Days = () => {
            const alternativeOpeningTimesThisWeek = [];

            // ES6 short as fuck
            currentGenderData && datesWithAlternateOpeningTimes && 
                datesWithAlternateOpeningTimes.forEach((dateWithChangedOpeningTimes, i) => 
                    momentDateToday <= dateWithChangedOpeningTimes.date && momentDateIn7Days > dateWithChangedOpeningTimes.date && dateWithChangedOpeningTimes.gender === currentGenderData.id && 
                        alternativeOpeningTimesThisWeek.push(dateWithChangedOpeningTimes)
                )

            // // ES6 short as I could
            // (currentGenderData && datesWithAlternateOpeningTimes ) && 
            //     datesWithAlternateOpeningTimes.forEach((dateWithChangedOpeningTimes, i) => {
            //         ((momentDateToday <= dateWithChangedOpeningTimes.date) && (momentDateIn7Days > dateWithChangedOpeningTimes.date) && (dateWithChangedOpeningTimes.gender === currentGenderData.id)) && 
            //             alternativeOpeningTimesThisWeek.push(dateWithChangedOpeningTimes)
            //     })
            
            // // ES6 readable
            // (currentGenderData && datesWithAlternateOpeningTimes ) && (
            //     datesWithAlternateOpeningTimes.forEach((dateWithChangedOpeningTimes, i) => {
            //         ((momentDateToday <= dateWithChangedOpeningTimes.date) && (momentDateIn7Days > dateWithChangedOpeningTimes.date) && (dateWithChangedOpeningTimes.gender === currentGenderData.id)) && (
            //             alternativeOpeningTimesThisWeek.push(dateWithChangedOpeningTimes)
            //         )
                       
            //     })
            // )
            
            // // Normal
            // if (currentGenderData && datesWithAlternateOpeningTimes) {
            //         datesWithAlternateOpeningTimes.forEach((dateWithChangedOpeningTimes, i) => {
            //             if ((momentDateToday <= dateWithChangedOpeningTimes.date) && (momentDateIn7Days > dateWithChangedOpeningTimes.date) && (dateWithChangedOpeningTimes.gender === currentGenderData.id)) {
            //                 alternativeOpeningTimesThisWeek.push(dateWithChangedOpeningTimes);
            //             }
            //         });
            // }
            // return alternativeOpeningTimesThisWeek;
        }

        const setNewWeekCalendar = () => {
            const alternativeOpeningTimesThisWeek = getAlternativeTimesForTheFollowing7Days();
            if (alternativeOpeningTimesThisWeek.length > 0 ) {
                if (currentGenderData) {
                    const originalOpeningTimes = currentGenderData.openingTimes;
                    return originalOpeningTimes.map(obj => alternativeOpeningTimesThisWeek.find(o => o.dayNumber === obj.dayNumber) || obj);
                }
            }
            if (currentGenderData) {
                return currentGenderData.openingTimes;
            }
        }

		setWeekCalendar(setNewWeekCalendar());
	}, [currentGenderData]);

	return (
		<ol>
			{weekCalendar && (
                weekCalendar.map((day, index) => {
                    const dayUniqueKey = `DAY_${index}`;

                    return (
                        <li 
                            key={dayUniqueKey} 
                            day={day.day}
                            className={(day.dayNumber === momentDayToday) ? 'today' : ''}
                        >
                            {day.dayName} | {day.open ? (
                                day.openTime + ' - ' + day.closeTime
                            ) : (
                                'Closed'
                            )}
                            {day.date && ('*')}
                        </li>
                    );
                })
            )}
		</ol>
	);
};

export default WeeklyOpeningTimes;
