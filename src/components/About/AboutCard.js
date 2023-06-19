import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut, Je suis <span className="purple">Jérémy Macadré </span>
            je viens d'une petite ville nommée<span className="purple"> Nevers </span> qui se situe en <span className="purple">France </span>.
            <br /> Je suis actuellement en 3ème année au seins de la <span className="purple">CS2i Nevers</span>.
            <br />
            De plus je suis actuellement en alternance chez <span className="purple">Orbis Holographics</span>. à Boulogne Billancourt
            <br />
            <br />
            En plus de coder j'adore faire des créations de monde en 3D et créer des histoires cohérentes dans les jeux vidéos.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer
            </li>
            <li className="about-activity">
              <ImPointRight /> Balader
            </li>
            <li className="about-activity">
              <ImPointRight /> Créer
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
