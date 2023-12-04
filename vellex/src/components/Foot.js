import React from "react";

const Foot = () => {
  return (
    <footer className="foot text-center py-3">
      <div className="">
        <div className="row">
          <div className="col-1 text-left">
            <img
              src="/logo.png"
              style={{ width: "35%" }}
              alt="Logo"
              className="img-fluid"
            />
          </div>
          <div className="col-10">
            <p>&copy; 2023 Velex. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
