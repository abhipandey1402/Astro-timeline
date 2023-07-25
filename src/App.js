import "./App.css";
import AstroTimeLine from "./components/AstroTimeLine";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Waves from './components/Waves';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <AstroTimeLine />
      <Footer />
    </div>
  );
}

export default App;
