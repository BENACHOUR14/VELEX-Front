import logo from './logo.svg';
import './App.css';
import Footer from './components/Foot';
import FuturEvent from './components/futurEvent/FuturEvent';
import Actu from './components/actu/Actu';
import Info from './components/info/Infos';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 section-40vh" style={{ backgroundColor: '#fff' }}>Première section</div>
          <div className="col-12 section-60vh">Deuxième section </div>
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
