import LandingSection from "./LandingSection/LandingSection";
import Presentation from "./Presentation/Presentation";
import Actu from "./actu/Actu";
import FuturEvent from "./futurEvent/FuturEvent";
import Infos from "./info/Infos";

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <LandingSection />
        <Presentation />
        <div className="col-12 section-60vh">
          <FuturEvent />
        </div>
        <div className="col-12 section-120vh">
          <Actu />
        </div>
        <div className="col-12 section-30vh">
          <Infos />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
