import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Budget, Parallax } from './screens';

const App = () => (
	<Router>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/presupuesto" element={<Budget />} />
			<Route exact path="/parallax" element={<Parallax />} />
			<Route exact path="*" element={<Home />} />
		</Routes>
	</Router>
);

export default App