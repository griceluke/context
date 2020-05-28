// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc
// NA ATM

// Website, function/hooks, etc imports
// NA ATM

const Day = styled.li`
	display: flex;
	position: relative;

	&.today::before {
		content: ' ';
		left: -13px;
		top: 4px;
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 5px 0 5px 10px;
		border-color: transparent transparent transparent #9dafa8;
	}
`;

const Spacer = styled.span `
	flex-grow: 1;
	margin: 0 8px;
	position: relative;
	
	::before {
		background: black;
		bottom: 2px;
		content: '';
		display: block;
		height: 1px;
		position: absolute;
		width: 100%;
	}
`;

const OpeningTimes = styled.span `
	text-align: right;
`;

const TimeAdjusted = styled.span `
	padding-left: 4px;
`;

const OpeningTimesByDay = ({children, className, dayName, openTime, closeTime, open, timesAdjusted}) => {
	return (
		<Day className={className}>
			<span>{dayName}</span>
			<Spacer/>
			<OpeningTimes>
				{open ? (
					openTime + ' - ' + closeTime
				) : (
					'Closed'
				)}
			</OpeningTimes>
			{timesAdjusted && (
				<TimeAdjusted>
				*
				</TimeAdjusted>
			)}
		</Day>
	);
};

export default OpeningTimesByDay;
