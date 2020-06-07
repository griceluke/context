// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';

// Internal components, images, etc
import WeeklyOpeningTimes from '../../components/WeeklyOpeningTimes';
import OpeningTimesChangedMessage from '../../components/OpeningTimesChangedMessage';
import PromptToChangeGenderContext from '../../components/PromptToChangeGenderContext';

const Calendar = styled.div`
	border: 2px solid ${colors.grey[2]};
	font-weight: 500;
	padding: 1.2rem 1rem;
`;

const CalendarTitle = styled.h3`
	color: ${colors.grey[7]};
	font-size: 1.12rem;
	font-weight: 700;
	padding-bottom: .7rem;
`;

const OpeningTimesCalendar = ({genderDataForCalendar}) => {
	return (
		<Calendar>
			<CalendarTitle>Opening hours</CalendarTitle>
			<WeeklyOpeningTimes genderDataForCalendar={genderDataForCalendar}/>
			<OpeningTimesChangedMessage genderDataForCalendar={genderDataForCalendar}/>
			<PromptToChangeGenderContext genderDataForCalendar={genderDataForCalendar}/>
		</Calendar>	
	);
};

export default OpeningTimesCalendar;
