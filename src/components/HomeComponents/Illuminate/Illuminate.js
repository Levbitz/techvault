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
          className="col l5 center-align "
        >
          <div className="content">
            <h3> Home automation </h3>

            <div>
              <p>
                Home automation gets you involved. Set your personal preferences
                and actions, then sit back and enjoy using the latest in-home
                automation technology. Though such technology is quite complex,
                it remains completely flexible and user-friendly making for a
                fun experience. High-tech products for the home are fun to use
                and share with others. Whether viewing visitors at your front
                door on your TV or tuning your stereo by using voice
                recognition, you’ll find home automation surprisingly enjoyable.
                And when it comes to impressing the friends, you’ll be happy to
                show off your newfound applications.
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
