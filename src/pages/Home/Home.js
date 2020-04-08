import React, { Component } from "react";
import videoMain from "../../assets/video/video.mp4";
import "./Home.scss";

export default class Home extends Component {
  componentDidMount() {
    const vid = document.getElementById("mainVid");
    vid.playbackRate = 0.45;
  }
  render() {
    return (
      <>
        <main className="homepage">
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
              
                <h1>Hi there! I'm Eula Bengco</h1>
              <h2> web developer based in Toronto, Canada. </h2>
            </div>
          </section>
        </main>
      </>
    );
  }
}
