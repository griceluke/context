import React, { useState, useEffect, createContext, useContext } from 'react';
import { GenderContext } from '../../components/genderContext/genderContext.js';

export const GenderDataContext = createContext();

export const GenderDataProvider = ({ children }) => {
	const { currentGender } = useContext(GenderContext);
	const [genderData] = useState([
		{
			id: 1,
			gender: 'male',
			name: 'gents',
			nameCap: 'Gents',
			salonType: 'barbers',
			openingTimes: [
				{
					day: 'Monday',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Tues',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Wednesday',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Thurs',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Fri',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Sat',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{ day: 'Sun', dayOrder: 7, open: false },
			],
		},
		{
			id: 2,
			gender: 'female',
			name: 'ladies',
			nameCap: 'Ladies',
			salonType: 'salon',
			openingTimes: [
				{
					day: 'Monday',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Tues',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Wednesday',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Thurs',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Fri',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{
					day: 'Sat',
					dayOrder: 1,
					open: true,
					openTime: '9:00',
					closeTime: '16:00',
				},
				{ day: 'Sun', dayOrder: 7, open: false },
			],
		},
	]);
	const [currentGenderData, setCurrentGenderData] = useState({});
	const [otherGenderData, setOtherGenderData] = useState({});

	useEffect(() => {
		setOtherGenderData(function() {
			for (let i = 0; i < genderData.length; i++) {
				if (genderData[i].id !== currentGender) {
					return genderData[i];
				}
			}
		});
		setCurrentGenderData(function() {
			for (let i = 0; i < genderData.length; i++) {
				if (genderData[i].id === currentGender) {
					return genderData[i];
				}
			}
		});
	}, [genderData, currentGender]);

	return (
		<GenderDataContext.Provider
			value={{ currentGenderData, otherGenderData, genderData }}
		>
			{children}
		</GenderDataContext.Provider>
	);
};
