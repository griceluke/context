// External, react, library, etc imports
import React from 'react';

// Internal global, context, etc
import { GenderDataProvider } from '../genderContext/genderContext';

// Website, function/hooks, etc imports
import SetScreens from '../SetScreens';
import './App.css';
import './reset.css';


function App() {
	return (
		<GenderDataProvider>
			<SetScreens />
		</GenderDataProvider> 
	);
}

export default App;
