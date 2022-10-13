import React from "react";
import { Parallax, Background } from "react-parallax";
import Director from "../../../images/director.jpg";

function DirectorInsight() {
  return (
    <div className="">
      <div className="row">
        <div className="col l4 hide-on-med-and-down">
          <div
            style={{
              width: 400,
              marginLeft: 100,
            }}
          >
            <DirectorParallax />
          </div>
        </div>
        <div className="col offset-l1 l7 s12">
          <div>
            <div>
              <h2>Derector Insight</h2>

              <p>
                Techvault came into being with the visionaries of playing a
                major role in technologically advancing homes in the current
                era, with a distinctive range of automated appliances that are
                crafted with great innovation and up-to-the-minute technology to
                make lives better and smarter every day by delivering top-notch
                quality products at an affordable price range. We believe in the
                idealogy of good customer service both post and before
                installation, quality of installation and providing products
                that have the potential to be smarter every day. Our success
                lies in giving flawless service to our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorInsight;

const DirectorParallax = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={Director}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div style={{ height: "500px" }} />
      </Parallax>
    </>
  );
};
