import React, { useState, useEffect, createContext } from 'react';

export const GenderContext = createContext();

export const GenderProvider = ({ children }) => {
	const [currentGender, setCurrentGender] = useState();

	useEffect(() => {
		if (sessionStorage.getItem('localStateCurrentGender')) {
			setCurrentGender(
				parseInt(sessionStorage.getItem('localStateCurrentGender'))
			);
		}
	}, []);

	return (
		<GenderContext.Provider value={{ currentGender, setCurrentGender }}>
			{children}
		</GenderContext.Provider>
	);
};
