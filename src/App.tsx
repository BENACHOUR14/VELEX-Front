import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./components/Events/Events";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/Events" element={<Events />} />
          </Routes>
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
