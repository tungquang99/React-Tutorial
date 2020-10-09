import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-html5" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-css3-alt" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js-square" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-angular" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-node-js" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-sass" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-less" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-wordpress" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-gulp" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-grunt" />
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-npm" />
                </li>
              </ul>
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Cross Browser Testing &amp; Debugging
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Cross Functional Teams
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  Agile Development &amp; Scrum
                </li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />
        </div>
      </div>
    );
  }
}
