import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">{this.landingData.firstName} <span class="text-primary">{this.landingData.lastName}</span></h1>
          <div class="subheading mb-5">{this.landingData.phoneNumber} · <a
            href="mailto:{this.landingData.email}">{this.landingData.email} · </a></div>
          <p class="lead mb-5">{this.landingData.bio}</p>
          <div class="social-icons">
            <a class="social-icon" href={this.landingData.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a><a class="social-icon"
              href={this.landingData.github}><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </section>

    );
  }
}

export default Landing;
