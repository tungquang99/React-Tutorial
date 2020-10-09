import React, { Component } from "react";
import ExpsItem from "./ExpsItem";
import dl from "./api.json";
export default class Experience extends Component {
  render() {
 
    return (
      <div>
        <div>
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              {dl.map((value) => (<ExpsItem name= {value.name} title={value.title} details={value.details} time={value.time} />))}
            </div>
          </section>
          <hr className="m-0" />
        </div>
      </div>
    );
  }
}
