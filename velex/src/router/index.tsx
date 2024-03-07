import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Events from "../components/Events/Events";

function AppRouter() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default AppRouter;
