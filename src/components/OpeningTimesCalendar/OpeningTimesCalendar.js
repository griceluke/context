// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc


// Website, function/hooks, etc imports

import WeeklyOpeningTimes from '../../components/WeeklyOpeningTimes';
import OpeningTimesChangedMessage from '../../components/OpeningTimesChangedMessage';
import PromptToChangeGenderContext from '../../components/PromptToChangeGenderContext';

const Calendar = styled.div`
	border: 2px solid black;
	font-weight: 500;
	padding: 1rem;
`;

const CalendarTitle = styled.h3`
	color: black;
	font-size: 1.18rem;
	font-weight: 700;
	padding-bottom: .5rem;
`;

const OpeningTimesCalendar = ({genderDataForCalendar}) => {
	return (
		<Calendar>
			<CalendarTitle>Opening hours</CalendarTitle>
			<WeeklyOpeningTimes 
				genderDataForCalendar={genderDataForCalendar}/>
			<OpeningTimesChangedMessage
				genderDataForCalendar={genderDataForCalendar}/>
			<PromptToChangeGenderContext
				genderDataForCalendar={genderDataForCalendar}/>
		</Calendar>	
	);
};

export default OpeningTimesCalendar;
