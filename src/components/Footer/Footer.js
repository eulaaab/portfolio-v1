import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFile, faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emojis from "emojis-list";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer bg-primary">
        <Container>
          <Row>
            <Col xs="6" className="footer__text">
              Made in {emojis[57]} using{" "}
              <FontAwesomeIcon icon={faReact} className="icon_" /> with{" "}
              <FontAwesomeIcon icon={faHeart} className="icon__heart" />
            </Col>
            <Col xs="6" className="footer__social">
              <Col>
                <a
                  href="github.com/eulaaab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
              </Col>
              <Col>
                {" "}
                <a
                  href="https://www.linkedin.com/in/eulabengco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              </Col>
              <Col>
                <a
                  href="https://docs.google.com/document/d/1mRGhqcJQzpKn-3o8235B5nuiXQaxfMx55eAmZrLB5IA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFile} className="icon" />
                </a>
              </Col>
              <Col>
                {" "}
                <a href="mailto:eulabengco@gmail.com?Subject=Saying Hi!">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
