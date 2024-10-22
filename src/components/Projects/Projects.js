import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="LightSapien"
              description="Seamless anime and manga reading experience. Enjoy smooth navigation, fast page loading, and a clean, mobile-friendly interface designed to keep you immersed in your favorite stories. Whether you're reading on the go or at home, our site ensures hassle-free access to content."
              ghLink="https://github.com/AdityaSen-1606/LightSapien"
              demoLink="https://github.com/user-attachments/assets/86e4afa0-1cc2-45dd-af69-35e826fbd853"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aerothon 6.0"
              description="Full-stack web application created for the Aerothon 6.0 competition, providing optimal and second-most optimal flight routes by integrating real-time weather and air traffic data."
              demoLink="https://route-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="KoinX"
              description="Take-home challenge for backend internship by KoinX, I built a backend application that creates RESTful APIs to fetch and deliver key data points from the CoinGecko API. "
              ghLink="https://github.com/AdityaSen-1606/koinx"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
