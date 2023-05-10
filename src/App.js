import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import './css/grid.css';
import "./css/style.css";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="wrapper">
			<Header />
			<Main />
			<Footer />
		</div>
  );
}

export default App;
