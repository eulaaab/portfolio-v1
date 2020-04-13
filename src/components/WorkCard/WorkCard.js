import React from "react";
import "bootswatch/dist/lux/bootstrap.css";
import "./WorkCard.scss";

const WorkCard = (item) => {
  const { id, name, description, images, tools, github, website, video } = item;

  return (
    <>
      <div className="card text-white bg-primary mb-3">
        <h3 className="card-header">{name}</h3>
        <img src={images[0]} alt="image" className="card__image" />

        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
