import { BrowserRouter, Routes, Route } from 'react-router';
import Index from './pages/Index';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Index />} />
		</Routes>
	</BrowserRouter>
);

export default App;
