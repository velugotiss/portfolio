import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return (
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          {this.experience.map((exp, index) => (<div key={index} class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">{exp.position}</h3>
              <div class="subheading mb-3">{exp.organization}</div>
              <p>{exp.aboutWork}</p>
            </div>
            <div class="flex-shrink-0"><span class="text-primary">{exp.fromDate} - {exp.toDate}</span></div>
          </div>))}
        </div>
      </section>
    );
  }
}

export default Experience;
