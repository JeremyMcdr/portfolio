import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stable from "../../Assets/Projects/Stable.png";
import serialcreative from "../../Assets/Projects/SerialCreative.png";
import projectIa from "../../Assets/Projects/project-ia.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes  <strong className="purple">projets </strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Voici une présentation de mes projets les plus récents
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stable}
              isBlog={false}
              title="PMU Play Stable"
              description="Création d'un jeu de course pour l'évènement NFT Paris pour stable, une jeune start up 3.0"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serialcreative}
              isBlog={false}
              title="Serial Creative"
              description="Création d'un mur qui se casse lorsque l'on approche de ce dernier. Grâce à la supperposition d'un monde virtuel avec un monde physique on à pu détecter la position exacte d'une personne dans un environnement 3D."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectIa}
              isBlog={false}
              title="ChatGPT + Unity"
              description="Grâce à la combinaison de chatGTP ainsi que d'autres IA on a pu créer un assistant vocal qui répond à toutes vos questions. De plus ce dernier est en 3D et possède une synchronisation Lymbiale"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mes  <strong className="purple">projets </strong> découverte
        </h1>
        <p style={{ color: "white" }}>
          Voici une présentation de mes projets fais tout seul chez moi
        </p>

        SECTION IN-COMMING

        <Col md={4} className="project-card">
          <ProjectCard
              imgPath={projectIa}
              isBlog={false}
              title="Gestionnaire d'employé"
              description="Premier gros projet en solitaire. C'est la création d'une application Web grâce à Angular ou le but est de faire une interface web de gestion d'employé et de commande."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
          />
        </Col>

      </Container>
    </Container>
  );
}

export default Projects;
