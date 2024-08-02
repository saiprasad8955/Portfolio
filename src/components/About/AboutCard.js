import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saiprasad Rathod </span>
            from <span className="purple"> Nanded, Maharashtra, India.</span>
            <br />
            I am currently available for a job and can join immediately.
            <br />
            I hold a Bachelor of Engineering degree in Mechanical Engineering from ICEEM, Aurangabad.
            <br />
            <br />
            I have diverse work experience in the tech industry:
            <ul>
              <li>
                I worked as a Backend Developer at FunctionUp Technologies (Fanplay Media Pvt. Ltd), Bangalore. [ Mar 2022 - Mar 2023 ]
              </li>
              <li>
                I served as a Full Stack Developer at StackLab.in, Pune. [ Apr 2023 - July 2024 ]
              </li>
            </ul>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
