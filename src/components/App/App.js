// External imports, installed libraries, etc
import React from 'react';

// Internal data, functions, custom hooks, etc
import { GenderDataProvider } from '../genderContext/genderContext';

// Internal components, images, etc
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
