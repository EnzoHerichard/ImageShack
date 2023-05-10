import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((element, index) => {
					return (
						<Route
							path={element.path}
							element={element.component}
							key={element.path + index}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;