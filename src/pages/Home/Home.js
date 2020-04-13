import React, { Component, Fragment } from "react";
import videoMain from "../../assets/video/video.mp4";
import "./Home.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  componentDidMount() {
    const vid = document.getElementById("mainVid");
    vid.playbackRate = 0.5;
  }
  render() {
    return (
      <>
        <main className="home">
          <section>
            <div className="hero-overlay">
              <div className="hero"></div>
              <div className="video-overlay">
                <video
                  loop="loop"
                  muted="muted"
                  autoplay="autoplay"
                  id="mainVid"
                >
                  <source src={videoMain} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="hero__text-container">
              <h1 className="hero__title">Hi there! I'm Eula</h1>
              <h2 className="hero__tagline">
                {" "}
                Web developer based in Toronto, Canada.{" "}
              </h2>

              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link nav__text"
              >
                <button type="button" className="btn btn-primary">
                  Learn More About Me
                  <span className="icon__react">
                    {" "}
                    <FontAwesomeIcon icon={faCoffee} />
                  </span>
                </button>
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }
}
