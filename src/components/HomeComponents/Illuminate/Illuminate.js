import React from "react";
import "./Illuminate.css";

function Illuminate() {
  return (
    <div className="illuminate_wrapper">
      <div className="row">
        <div className="col l6"></div>
        <div
          style={{
            minHeight: "70vh",
            background: "rgb(9, 9, 9)",
          }}
          className="col l5 "
        >
          <div>
            <h5>Choose the smarter way to illuminate your abode</h5>

            <div>
              <p>
                Get ready for a majestic experience with our smart lights that
                enable you to monitor every lighting piece remotely, save energy
                consumption, dim the lights according to one's mood or change
                the colour settings of lights that serve several options to
                choose for. This is the beauty of our smart lights which is just
                more than monitoring or saving energy. It gives you a whole new
                level of lighting experience with its smart features. So get
                ready to feel the legacy of smarter lighting today with
                Techvault!
              </p>
            </div>
          </div>
        </div>

        <div className="col l1"></div>
      </div>
    </div>
  );
}

export default Illuminate;
