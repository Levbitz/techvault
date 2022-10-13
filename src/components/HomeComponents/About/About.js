import React from "react";
import { Parallax, Background } from "react-parallax";
import HomeAbtImg from "../../../images/homeAbt.jpg";
import "./About.css";

function About() {
  return (
    <div className="home_about_wrap">
      <div className="row">
        <div className="col l4 offset-l1">
          <div className="content">
            <h3 className="white-text">WHO WE ARE?</h3>
            <p className="white-text">
              We are an advanced systems integrator of visual communication
              products, projects, technologies design and services. We will
              design your vision and produce a system that meets your specific
              requirements using quality equipment and is easy to use.
            </p>

            <div
              style={{
                marginTop: 50,
              }}
              className="row"
            >
              <div className="col l3">
                <p className="white-text">
                  <span
                    style={{
                      fontSize: 80,
                      margin: 0,
                      padding: 0,
                      fontWeight: "bold",
                    }}
                  >
                    10
                  </span>
                </p>
              </div>
              <div className="col l9">
                <div>
                  {" "}
                  <p
                    style={{
                      marginTop: 30,
                    }}
                    className="white-text"
                  >
                    YEARS OF <br /> TECHNICAL EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col l7 hide-on-med-and-down">
          <div
            style={{
              padding: 80,
              background: "#090909",
            }}
            className=""
          >
            <MyAbtPallarax />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

const MyAbtPallarax = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={HomeAbtImg}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div style={{ height: "400px" }} />
      </Parallax>
    </>
  );
};
