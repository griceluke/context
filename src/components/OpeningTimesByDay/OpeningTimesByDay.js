// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Internal components, images, etc
// NA ATM

const Day = styled.li`
	color: ${colors.grey[7]};
	display: flex;
	line-height: 1.9em;
	font-size: ${fonts.sans.fontSize};
	position: relative;

	&.today::before {
		background: ${colors.white};
		content: ' ';
		left: -21px;
		top: 10px;
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 5px 0 5px 10px;
		border-color: transparent transparent transparent ${colors.primary[0]};
	}
`;

const DayName = styled.span`
	color: ${colors.grey[6.5]};
`;

const Spacer = styled.span `
	flex-grow: 1;
	margin: 0 8px;
	position: relative;
	
	::before {
		background: ${colors.grey[2]};
		bottom: 2px;
		content: '';
		display: block;
		height: 1px;
		position: absolute;
		width: 100%;
	}
`;

const OpeningTimes = styled.span `
	font-weight: ${fonts.sans.fontWeight.semiBold};
	text-align: right;
`;

const TimeAdjusted = styled.span `
	padding-left: 4px;
`;

const OpeningTimesByDay = ({children, className, dayName, openTime, closeTime, open, timesAdjusted, isMobile}) => {
	return (
		<Day className={className}>
			<DayName>{dayName}</DayName>
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
