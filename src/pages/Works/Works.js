import React, { Component } from "react";
import "./Works.scss";
import WorksList from "../../components/WorksList/WorksList";

export default function Works(props) {
  return (
    <>
      <section className="works">
        <h1>WORKS</h1>
        {
          //<p className="box"></p>
        }
        <WorksList />
      </section>
    </>
  );
}
