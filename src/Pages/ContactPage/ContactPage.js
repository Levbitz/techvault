import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="service_page_wrap">
      <div className="container">
        <div className="row">
          <h3>Contact Us</h3>
          <div className="col l6">
            <div>
              <div class="row">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="first_name" type="text" class="validate" />
                      <label for="first_name">Full Name</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input id="phone" type="number" class="validate" />
                      <label for="phone">Phone Number</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input id="email" type="email" class="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <textarea
                        id="textarea1"
                        class="materialize-textarea"
                      ></textarea>
                      <label for="textarea1">Message</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        className="btn red"
                        id="email"
                        type="submit"
                        value={"submit Message"}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col l5 offset-l1">
            <div>
              <h5>Address</h5>
              <p>
                929, 3rd A Cross, 9th Main Rd, HRBR Layout 1st Block, HRBR
                Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
