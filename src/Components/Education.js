import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return (
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <h2 class="mb-5">Education</h2>
          {this.education.map((data, index) => (
            <div key={index} class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">{data.university}</h3>
                <div class="subheading mb-3">{data.degree}</div>
                <p>{data.gpa}</p>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">{data.fromDate} - {data.toDate}</span></div>
            </div>))
          }</div>
      </section>

    );
  }
}

export default Education;
