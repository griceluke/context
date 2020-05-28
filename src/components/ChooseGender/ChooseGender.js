// External, react, library, etc imports
import React, { useContext } from 'react';

// Internal global, context, etc
import { GenderDataContext } from '../genderContext/genderDataContext.js';

// Website, function/hooks, etc imports
// NA ATM


const ChooseGender = () => {
	const { genderData, setCurrentGender } = useContext(GenderDataContext);

	const setGender = e => {
		let genderId = parseInt(e.target.getAttribute('data-id'));
		setCurrentGender(genderId);
		sessionStorage.setItem('localStateCurrentGender', genderId);
	};

	return (
		<>
			{genderData.map(gender => {
				return (
					<button key={gender.id} 
							data-id={gender.id} 
							onClick={setGender}>
						{gender.nameCap}
					</button>
				);
			})}
		</>
	);
};

export default ChooseGender;
