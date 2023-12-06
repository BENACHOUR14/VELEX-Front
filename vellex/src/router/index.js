import { Route, Routes } from "react-router-dom";
import Events from "../components/Events/Events";
import LandingPage from "../components/LandingPage/LandingPage";
import Clubs from "../components/Clubs/Clubs";
import Connection from "../components/connection/Connection";
import ProfilePage from "../components/Profil/ProfilePage";
import Futur from "../components/Profil/Futur";
import Club from "../components/Profil/Club";
import Past from "../components/Profil/Past";
import ProfilClub from "../components/Clubs/ProfilClub";
import EventsClub from "../components/Clubs/EventsClub";
import MembersClub from "../components/Clubs/MembersClub";
import Follow from "../components/Profil/Follow";
import DetailEvent from "../components/Events/DetailEvent";
import Contact from "../components/Contact/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/connection" element={<Connection />} />
      <Route path="/profil" element={<ProfilePage />} />
      <Route path="/past" element={<Past />} />
      <Route path="/futur" element={<Futur />} />
      <Route path="/club" element={<Club />} />
      <Route path="/profilClub" element={<ProfilClub />} />
      <Route path="/follow" element={<Follow />} />
      <Route path="/eventClub" element={<EventsClub />} />
      <Route path="/membersClub" element={<MembersClub />} />
      <Route path="/detailEvent" element={<DetailEvent />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
