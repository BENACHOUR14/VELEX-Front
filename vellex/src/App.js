import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 section-40vh">Première section</div>
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
