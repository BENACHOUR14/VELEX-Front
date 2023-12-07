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
import AddEvent from "../components/Events/addEvent";
const url = "http://localhost:4000/";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events url={url} />} />
      <Route path="/clubs" element={<Clubs url={url} />} />
      <Route path="/connection" element={<Connection url={url} />} />
      <Route path="/profil" element={<ProfilePage url={url} />} />
      <Route path="/past" element={<Past url={url} />} />
      <Route path="/futur" element={<Futur url={url} />} />
      <Route path="/club" element={<Club url={url} />} />
      <Route path="/profilClub/:id" exact element={<ProfilClub url={url} />} />
      <Route path="/follow" element={<Follow url={url} />} />
      <Route path="/eventClub" element={<EventsClub url={url} />} />
      <Route path="/membersClub" element={<MembersClub url={url} />} />
      <Route path="/detailEvent/:id" exact element={<DetailEvent  url={url}/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/addEvent" element={<AddEvent />} />
    </Routes>
  );
}

export default AppRouter;
