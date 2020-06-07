// External imports, installed libraries, etc
import React, { useContext } from 'react';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../../components/genderContext/genderContext';

// Internal components, images, etc
// import ToggleGender from '../../components/ToggleGender';
// import ClearGender from '../../components/ClearGender';
// import OpeningTimes from '../../components/OpeningTimes';

const ContactPage = () => {
	const { currentGenderData } = useContext(GenderContext);

	return (
		<>
		{currentGenderData && (
			<p>Contact page</p>
		)}
		</>
	);
}

export default ContactPage;