// External imports
import React from 'react';

// Internal global imports inlcluding external imports within them
import { GenderProvider } from '../genderContext/genderContext';
import { GenderDataProvider } from '../genderContext/genderDataContext';

// Website imports
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
