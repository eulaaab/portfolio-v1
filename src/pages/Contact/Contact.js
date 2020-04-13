import React, { Component } from "react";
import contact1 from "../../assets/images/contact-01.jpg";
import contact2 from "../../assets/images/contact-02.jpg";
import "./Contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact">
          <h1>Say Hello!</h1>
        </section>
        {/*
  <div id="background">
          <img src={contact1} className="bottom" />
          <img src={contact2} className="top" />
        </div>
          */}
      </>
    );
  }
}
