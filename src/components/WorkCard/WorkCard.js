import React, { useState } from "react";
import "bootswatch/dist/lux/bootstrap.css";
import "./WorkCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faVideo } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

const WorkCard = (item) => {
  const { id, name, description, images, tools, github, website, video } = item;
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    return setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    return setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    return setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="card text-white bg-primary mb-3">
        <h3 className="card-header">{name}</h3>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            items={images}
          />
          {images.map((item, i) => {
            return (
              <CarouselItem key={item.photoId}>
                <img src={item} alt="image" className="card__image" />
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <div className="card__tools">
            <h5 className="card-title">TOOLS: </h5>
            {tools.map((item, i) => (
              <span>{item}</span>
            ))}
          </div>
          {website ? (
            <a href={website} target="_blank" className="card__link">
              <FontAwesomeIcon icon={faLink} className="card__icon" />
            </a>
          ) : (
            ""
          )}
          {github ? (
            <a href={github} target="_blank" className="card__link">
              <FontAwesomeIcon icon={faGithub} className="card__icon" />
            </a>
          ) : (
            ""
          )}
          {video ? (
            <a href={video} target="_blank" className="card__link">
              <FontAwesomeIcon icon={faVideo} className="card__icon" />
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
