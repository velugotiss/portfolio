import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.education = props.education;
  }

  render() {
    return (
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          {this.education.map((data, index) => (
            <div key={index} className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1 text-left mr-1">
                <h3 className="mb-0">{data.university}</h3>
                <div className="subheading mb-1">{data.degree}</div>
                <p>{data.gpa}</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">{data.fromDate} - {data.toDate}</span></div>
            </div>))
          }</div>
      </section>

    );
  }
}

export default Education;
