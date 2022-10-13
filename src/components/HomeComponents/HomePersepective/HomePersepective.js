import React from "react";
import "./HomePersepective.css";
import P1Img from "../../../images/p1.png";
import P2Img from "../../../images/p2.png";
import P3Img from "../../../images/p3.png";
import { Link } from "react-router-dom";

function HomePersepective() {
  return (
    <div className="HomePersepective_wrap">
      <div className="container">
        <div className="row">
          <h3>Our Services</h3>

          <div className="col l4 s12">
            <div>
              <h6>HOME THEATER</h6>
              <div>
                {/*<p className="center">
                  <img src={P1Img} alt="" />
  </p>*/}
                <p>
                  A comfortable, luxury, high performance private home theater
                  is the perfect way to bring family and friends together, and
                  it is a source of many hours of...
                </p>
                <p className="centers">
                  <Link to="/services" className="btn btn-small red">
                    {" "}
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "rgb(9, 9, 9)",
            }}
            className="col l4 s12 z-depth-2 "
          >
            <div className="">
              <h6>HGH FIDELITY AUDIO</h6>
              <div>
                {/* <p className="center">
                  <img src={P2Img} alt="" />
          </p>*/}
                <p>
                  If you are passionate when it comes to music, then AudioLux is
                  the right partner for you. Regardless of whether you are a
                  vinyl, streaming...
                </p>
                <p className="center">
                  <Link to="/services" className="btn btn-small red">
                    {" "}
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col l4 s12">
            <div>
              <h6>HOME AUTOMATION</h6>

              <div>
                {/*  <p className="center">
                  <img src={P3Img} alt="" />
        </p>*/}
                <p>
                  Most companies offer only automation or only lighting
                  solutions and we were no different. But after interacting with
                  a lot of our customers...
                </p>
                <p className="center">
                  <Link to="/services" className="btn btn-small red">
                    {" "}
                    read more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePersepective;

// const SinglePersepective = () => {
//   return (
//     <>
//       <div className="col l4">
//         <div>
//           <h5>WE UNDERSTAND</h5>
//           <p>
//             The secret to our unmatchable quality and standard of products is
//             that we understand your needs. We are committed to upgrading your
//             space into a smarter one by addressing your specific requirements
//             and working on it with a highly driven passion.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
