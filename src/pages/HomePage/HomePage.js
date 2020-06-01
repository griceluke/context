// External, react, library, etc imports
import React, { useContext } from 'react';

// Internal global, context, etc
import { GenderContext } from '../../components/genderContext/genderContext';

// Website, function/hooks, etc imports
import ToggleGender from '../../components/ToggleGender';
import ClearGender from '../../components/ClearGender';
import OpeningTimes from '../../components/OpeningTimes';

function HomePage() {
	const { currentGenderData } = useContext(GenderContext);

	return (
		<>
			<h1>Taylors &amp; Co Hair and Barbering</h1>
			{currentGenderData && (
				<h2>
					{'The ' +
						currentGenderData.nameCap +
						' ' +
						currentGenderData.salonType}
				</h2>
			)}
			
			<br />

			<OpeningTimes/>

			<br />
			<ToggleGender/>
			<ClearGender/>
		</>
	);
}

export default HomePage;