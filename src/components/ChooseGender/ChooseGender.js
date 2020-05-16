import React, { useContext } from 'react';

import { GenderContext } from '../genderContext/genderContext.js';
import { GenderDataContext } from '../genderContext/genderDataContext.js';

const ChooseGender = () => {
	const { genderData } = useContext(GenderDataContext);
	const { setCurrentGender } = useContext(GenderContext);

	const setGender = e => {
		let genderId = parseInt(e.target.getAttribute('data-id'));
		setCurrentGender(genderId);
		sessionStorage.setItem('localStateCurrentGender', genderId);
	};

	return (
		<>
			{genderData.map(gender => {
				return (
					<button key={gender.id} data-id={gender.id} onClick={setGender}>
						{gender.nameCap}
					</button>
				);
			})}
		</>
	);
};

export default ChooseGender;
