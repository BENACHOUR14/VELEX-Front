import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstSection from "./components/FirstSection";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 section-40vh"></div>
          <div className="col-12 section-60vh">Deuxième section </div>
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
