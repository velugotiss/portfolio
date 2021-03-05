import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return (
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {this.experience.map((exp, index) => (<div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1 text-left mr-1">
              <h3 className="mb-0">{exp.position}</h3>
              <div className="subheading mb-1">{exp.organization}</div>
              <p>{exp.aboutWork}</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">{exp.fromDate} - {exp.toDate}</span></div>
          </div>))}
        </div>
      </section>
    );
  }
}

export default Experience;
