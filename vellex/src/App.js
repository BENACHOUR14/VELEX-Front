import "./App.css";
import Footer from "./components/Foot";
import Header from "./components/Header";
import AppRouter from "./router/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
