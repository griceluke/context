import React, { useContext } from 'react';
import { GenderContext } from '../genderContext/genderContext.js';
import { GenderDataContext } from '../genderContext/genderDataContext.js';

const WeeklyOpeningTimes = () => {
	const { currentGender } = useContext(GenderContext);
	const { currentGenderData } = useContext(GenderDataContext);

	console.log(currentGender);
	console.log(currentGenderData);

	// OpeningTimes is undefined initially causing the problem

	return (
		<>
			{/* {currentGenderData.openingTimes && (
                
            currentGenderData.openingTimes.map((day, index) => {
                const dayUniqueKey = `DAY_${index}`;

                return (
                    <li key={dayUniqueKey}>
                        {day.day} | {day.open ? (
                            day.openTime + ' - ' + day.closeTime
                        ) : (
                            'Closed'
                        )}
                    </li>
                );
            })
            
        )} */}
		</>
	);
};

export default WeeklyOpeningTimes;
