import { Route, Routes } from "react-router-dom";
import Events from "../components/Events/Events";
import LandingPage from "../components/LandingPage/LandingPage";
import Clubs from "../components/Clubs/Clubs";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/clubs" element={<Clubs />} />
    </Routes>
  );
}

export default AppRouter;
