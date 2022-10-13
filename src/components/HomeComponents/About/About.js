import React from "react";
import { Parallax, Background } from "react-parallax";
import HomeAbtImg from "../../../images/homeAbt.jpeg";

function About() {
  return (
    <div className="">
      <div className="row">
        <div className="col l4 offset-l1">
          <div>
            <h3 className="white-text">
              Live the Pleasure of a Smart & Innovative
            </h3>
            <p className="white-text">
              A comfortable, luxury, high performance private home theater is
              the perfect way to bring family and friends together, and it is a
              source of many hours of entertainment. At AudioLux, we are
              passionate about creating home entertainment spaces that are
              personalized to suit our clients and their families
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
        <div className="col l7">
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
