import React from "react";
import WorkCard from "../../components/WorkCard/WorkCard";
import eatermeter01 from "../../assets/images/eatermeter-01.png";
import eatermeter02 from "../../assets/images/eatermeter-02.png";
import eatermeter03 from "../../assets/images/eatermeter-03.png";
import eatermeter04 from "../../assets/images/eatermeter-04.png";
import brainflix01 from "../../assets/images/brainflix-01.png";
import brainflix02 from "../../assets/images/brainflix-02.png";
import brainflix03 from "../../assets/images/brainflix-03.png";
import brainflix04 from "../../assets/images/brainflix-04.png";
import startech01 from "../../assets/images/startech-01.png";
import startech02 from "../../assets/images/startech-02.png";
import startech03 from "../../assets/images/startech-03.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSass,
  faReact,
  faNodeJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import heroku from "../../assets/images/heroku.svg";

export default function WorksList() {
  let projects = [
    {
      id: "01",
      name: "EaterMeter",
      description: "Lorem",
      images: [eatermeter01, eatermeter02, eatermeter03, eatermeter04],
      tools: [
        <FontAwesomeIcon icon={faReact} className="icon" alt="React" />,
        <FontAwesomeIcon icon={faNodeJs} className="icon" alt="NodeJs" />,
        <FontAwesomeIcon icon={faBootstrap} className="icon" alt="Bootstrap" />,
        <img src={heroku} className="icon__heroku" alt="Heroku" />,
      ],
      github: "",
      website: "https://eatermeter.herokuapp.com/",
      video: "https://www.loom.com/share/74fc829740a54cabb888f3f30e908065",
    },
    {
      id: "02",
      name: "Startech",
      description: "Lorem",
      images: [startech01, startech02, startech03],
      tools: [
        <FontAwesomeIcon icon={faSass} className="icon" alt="SASS" />,
        <FontAwesomeIcon icon={faNodeJs} className="icon" alt="NodeJs" />,
        <FontAwesomeIcon icon={faReact} className="icon" alt="React" />,
      ],
      github: "https://github.com/eulaaab/brainstation-3d",
      website: "https://reverent-neumann-0948a0.netlify.com/",
      video: "",
    },
    {
      id: "03",
      name: "BrainFlix",
      description:
        "Lorem build upon Javascript concepts and learn React in depth for three sprints",
      images: [brainflix01, brainflix02, brainflix03, brainflix04],
      tools: [
        <FontAwesomeIcon icon={faSass} className="icon" alt="SASS" />,
        <FontAwesomeIcon icon={faNodeJs} className="icon" alt="NodeJs" />,
        <FontAwesomeIcon icon={faReact} className="icon" alt="React" />,
      ],
      github: "https://github.com/eulaaab/eula-bengco-brainflix",
      website: "",
      video: "",
    },
  ];

  return (
    <>
      <div className="works__container">
        {projects.map((obj) => (
          <WorkCard {...obj} key={obj.id} />
        ))}
      </div>
    </>
  );
}
