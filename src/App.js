import "./App.css";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Homepage } from "./Pages/Homepage";
import { NavigationResult } from "./Pages/NavigationResult";
import { ArtworkPage } from "./Pages/ArtworkPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router forceRefresh={true}>
			<div className='text-white'>
				<Navigation />
				<Routes>
					<Route exact path='/amateurs-d-art/' element={<Homepage />}></Route>
					<Route
						exact
						path='/amateurs-d-art/page/:name'
						element={<NavigationResult />}
					></Route>
					<Route
						exact
						path='/amateurs-d-art/artwork/:artworkId'
						element={<ArtworkPage />}
					></Route>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
