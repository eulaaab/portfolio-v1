import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faJira,
  faNodeJs,
  faNpm,
  faGit,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import "./About.scss";
import heroku from "../../assets/images/heroku.svg";

export default class About extends Component {
  render() {
    return (
      <>
        <section className="about">
          <div className="about__hero">
            <div className="about__text-container">
              <div className="about__text">
                <h1 className="about__header">ABOUT</h1>
                <p>
                  I'm Eula, a{" "}
                  <span className="about__bold">full stack web developer</span>{" "}
                  from Canada. I recently graduated from the Full-time Web
                  Development Diploma program Winter 2020 Cohort at{" "}
                  <a
                    href="https://brainstation.io/course/toronto/web-development-immersive"
                    target="_blank"
                  >
                    BrainStation
                  </a>
                  .{" "}
                  <span className="about__text--mobile">
                    {" "}
                    I have a background in engineering and worked in the
                    software and legal industries before entering the exciting
                    world of web development.{" "}
                  </span>
                  I have been always fascinated with the internet, how it works
                  and decided to pursue this field of ever challenging and
                  rewarding at the same time. When not coding, I'm globe
                  trotting, playing guitar, and creating memories with my
                  Olympus OM-D Mark II.
                </p>
                <Link to="/contact">
                  <button type="button" className="btn btn-primary">
                    SAY HELLO
                  </button>
                </Link>
              </div>
              <div className="about__skills">
                <h2 className="about__header">SKILLS</h2>

                <ul className="about__icons">
                  <li>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      className="icon"
                      alt="HTML5"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCss3}
                      className="icon"
                      alt="CSS3"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faSass}
                      className="icon"
                      alt="SASS"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faJs}
                      className="icon"
                      alt=""
                      JavaScript
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faReact}
                      className="icon"
                      alt="React"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      className="icon"
                      alt="NodeJs"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faJira}
                      className="icon"
                      alt="Jira"
                    />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faNpm} className="icon" alt="Npm" />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGit} className="icon" alt="Git" />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faBootstrap}
                      className="icon"
                      alt="Bootstrap"
                    />
                  </li>
                  <li>
                    <img src={heroku} className="icon__heroku" alt="Heroku" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
