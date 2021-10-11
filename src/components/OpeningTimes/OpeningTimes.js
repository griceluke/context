// External imports, installed libraries, etc
import React, { useState, useEffect, useContext } from 'react';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Internal components, images, etc
import ToggleOpeningTimesCalendar from '../ToggleOpeningTimesCalendar';
import OpeningTimesCalendar from '../../components/OpeningTimesCalendar';

const getNewGenderDataForCalendar = (genderData, genderForCalendar) => {	
	const genderMatch = genderData.find(e => (e.id === genderForCalendar));
	if (genderMatch){
		return genderMatch;
	}
};

const OpeningTimes = () => {
	const { currentGender, currentGenderData, genderData } = useContext(GenderContext);
	const [genderForCalendar, setGenderForCalendar] = useState(currentGender);
	const [genderDataForCalendar, setGenderDataForCalendar] = useState(currentGenderData);

	useEffect(() => {
		setGenderDataForCalendar(getNewGenderDataForCalendar(genderData,genderForCalendar));
	}, [genderData, genderForCalendar]);

	return (
		<>
			<ToggleOpeningTimesCalendar 
				genderData={genderData} 
				genderDataForCalendar={genderDataForCalendar}
				setGenderForCalendar={setGenderForCalendar}/>
			<OpeningTimesCalendar 
				genderDataForCalendar={genderDataForCalendar}/>
		</>
	);
};

export default OpeningTimes;
