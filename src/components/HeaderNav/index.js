import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/works">WORKS</Link>
        </li>
        <li>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
