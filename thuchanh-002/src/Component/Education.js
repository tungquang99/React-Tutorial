import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Education</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">University of Colorado Boulder</h3>
                  <div className="subheading mb-3">Bachelor of Science</div>
                  <div>Computer Science - Web Development Track</div>
                  <p>GPA: 3.23</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">August 2006 - May 2010</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                  <h3 className="mb-0">James Buchanan High School</h3>
                  <div className="subheading mb-3">
                    Technology Magnet Program
                  </div>
                  <p>GPA: 3.56</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">August 2002 - May 2006</span>
                </div>
              </div>
            </div>
          </section>
          <hr className="m-0" />
        </div>
      </div>
    );
  }
}
