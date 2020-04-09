import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import emojis from "emojis-list";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer bg-primary">
        <Container>
          <Row>
            <Col xs="6" sm="4">
              Made in {emojis[57]} using{" "}
              <FontAwesomeIcon icon={faReact} className="icon_" /> with{" "}
              <FontAwesomeIcon icon={faHeart} className="icon_" />
            </Col>
            <Col xs="6" sm="4">
              .
            </Col>
            <Col sm="4">
              <Row>
                <Col>
                  <a href="github.com/eulaaab" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                </Col>
                <Col>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/eulabengco/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                </Col>
                <Col>
                  <FontAwesomeIcon icon={faFile} className="icon" />
                </Col>
                <Col>
                  {" "}
                  <a
                    href="https://www.instagram.com/forweownthesky/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
