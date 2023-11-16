import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from "./components/FirstSection";
import Welcome from "./components/Welcome";

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
