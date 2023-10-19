import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Form from "./Components/Form/Form";
import MyPlayer from "./Components/MyPlayer/MyPlayer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Navbar />} />
				<Route path="/about" element={<Header />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" elementt={<Projects />} />
				<Route path="/contact" element={<Form />} />
				<Route path="/demo" element={<MyPlayer />} />
				{/* 404 */}
				<Route
					path="*"
					element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
				/>
			</Routes>
		</>
	);
}

export default App;
