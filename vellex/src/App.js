import "./App.css";
import Footer from "./components/Foot";
import FuturEvent from "./components/futurEvent/FuturEvent";
import Actu from "./components/actu/Actu";
import Info from "./components/info/Infos";
import LandingSection from "./components/LandingSection/LandingSection";
import Presentation from "./components/Presentation/Presentation";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row">
          <LandingSection />
          <Presentation />
          <div className="col-12 section-60vh">
            <FuturEvent />
          </div>
          <div className="col-12 section-120vh">
            <Actu />
          </div>
          <div className="col-12 section-30vh">
            <Info />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
