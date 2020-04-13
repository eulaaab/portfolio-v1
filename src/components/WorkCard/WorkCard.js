import React from "react";
import "bootswatch/dist/lux/bootstrap.css";
import "./WorkCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";

const WorkCard = (item) => {
  const { id, name, description, images, tools, github, website, video } = item;

  return (
    <>
      <div className="card text-white bg-primary mb-3">
        <h3 className="card-header">{name}</h3>
        <img src={images[0]} alt="image" className="card__image" />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <h5 className="card-title">TOOLS: </h5>
          {website ? (
            <a href={website} target="_blank">
              <FontAwesomeIcon icon={faLink} />
            </a>
          ) : (
            ""
          )}
          {github ? (
            <a href={github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          ) : (
            ""
          )}
          {video ? (
            <a href={video} target="_blank">
              <FontAwesomeIcon icon={faVideo} />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default WorkCard;
