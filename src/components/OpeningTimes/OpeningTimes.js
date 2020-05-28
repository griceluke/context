// External, react, library, etc imports
import React, { useState, useEffect, useContext } from 'react';
// import styled from 'styled-components';

// Internal global, context, etc
import { GenderDataContext } from '../genderContext/genderDataContext.js';

// Website, function/hooks, etc imports
import ToggleCalendar from '../../components/ToggleCalendar';
import OpeningTimesCalendar from '../../components/OpeningTimesCalendar';

const getNewGenderDataForCalendar = (genderData, genderForCalendar) => {	
	const genderMatch = genderData.find(e => (e.id === genderForCalendar));
	if (genderMatch){
		return genderMatch;
	}
};

const OpeningTimes = () => {
	const { currentGender, currentGenderData, genderData } = useContext(GenderDataContext);
	const [genderForCalendar, setGenderForCalendar] = useState(currentGender);
	const [genderDataForCalendar, setGenderDataForCalendar] = useState(currentGenderData);

	useEffect(() => {
		setGenderDataForCalendar(getNewGenderDataForCalendar(genderData,genderForCalendar));
	}, [genderData, genderForCalendar]);

	return (
		<>
			<ToggleCalendar 
				genderData={genderData} 
				genderDataForCalendar={genderDataForCalendar}
				setGenderForCalendar={setGenderForCalendar}/>
			<OpeningTimesCalendar 
				genderDataForCalendar={genderDataForCalendar}/>
		</>
	);
};

export default OpeningTimes;
