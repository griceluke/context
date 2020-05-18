// External, react, library, etc imports
import React from 'react';

// Internal global, context, etc
import { GenderProvider } from '../genderContext/genderContext';
import { GenderDataProvider } from '../genderContext/genderDataContext';

// Website, function/hooks, etc imports
import SetScreens from '../SetScreens';
import './App.css';
import './reset.css';


function App() {
	return (
		<GenderProvider>
			<GenderDataProvider>
				<SetScreens />
			</GenderDataProvider>
		</GenderProvider>
	);
}

export default App;
