import { Route, Routes } from "react-router-dom";
import Events from "../components/Events/Events";
import LandingPage from "../components/LandingPage/LandingPage";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default AppRouter;
