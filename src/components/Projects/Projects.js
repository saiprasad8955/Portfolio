import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sop from "../../Assets/sop.png";
import tracking from "../../Assets/tracking.png";
import harmony from "../../Assets/harmony.png";
import loyali from "../../Assets/loyali.png";
import accounting from "../../Assets/accounting.png";
import atros from "../../Assets/Atros.png";
import zventure from "../../Assets/zventure.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a my projects which I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accounting}
              title="Accounting Software"
              description="The accounting software is a comprehensive CRM solution designed to manage various business operations, including customers, vendors, products, sales, purchases, income, and expenses. It features barcode generation for products, which are created during the purchase process, ensuring efficient inventory tracking and management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracking}
              title="Tracking Software"
              description="The tracking software, developed for Median Logistics, is designed to manage the complete logistics workflow. It includes lead management with CRUD (Create, Read, Update, Delete) operations, job card creation using leads and quotations, job card updates, and deletions. The software generates bills from job cards and incorporates GST to overheads added in the job cards. It also facilitates shipment tracking with various statuses, and manages sales, purchases, and bank operations with full CRUD functionality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loyali}
              isBlog={false}
              title="Loyali"
              description="The Loyali admin panel was developed to oversee customer and business interactions within the app. It allows for data monitoring, adding offers, and publishing them to all businesses. The panel also facilitates the addition of gift cards for discounts to boost sales and implements reward plans for earning loyalty points."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sop}
              isBlog={false}
              title="Standard Operating Procedures"
              description="The SOP system was designed for a printing firm to streamline operations. It enables the addition of customers and employees, the creation of job cards based on customer requirements, and the generation of bills. These bills can be sent to clients via WhatsApp, email, or SMS. The system also includes comprehensive reporting features, providing monthly and annual reports, all integrated within this CRM solution."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atros}
              isBlog={false}
              title="ATROS"
              description="Designed and developed a web application for ATROS to efficiently manage RO devices and their dependencies. The application optimized core modules, including user management, device management, subscription handling, and task management, ensuring efficient role-based access, automation, and real-time tracking of technicians' assignments. Integrated features include RO device recharging, recharge-based disbursement, and usage-based billing, all accessible directly on the website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zventure}
              isBlog={false}
              title="Z-Ventures"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={harmony}
              isBlog={false}
              title="Harmony App"
              description="Harmony is a mediation application designed to assist users in integrating mindfulness into their daily routines and enhancing their understanding of the importance of health. The app features audio guides and interactive 3D objects to help users maintain focus during meditation sessions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
