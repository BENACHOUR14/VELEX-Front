import "./App.css";
import Footer from "./components/Foot";
import FuturEvent from "./components/futurEvent/FuturEvent";
import Actu from "./components/actu/Actu";
import Info from "./components/info/Infos";
import FirstSection from "./components/FirstSection";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row">
          <FirstSection />
          <Welcome />
          <div className="col-12 section-60vh">Troisième section</div>
          <div className="col-12 section-120vh">Quatrième section </div>
          <div className="col-12 section-30vh">Cinquieme section </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
