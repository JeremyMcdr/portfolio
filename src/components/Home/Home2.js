import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Je me <span className="purple"> présente </span>
            </h1>
            <p className="home-about-body">
              Je suis complètement fan de l'outil informatique et la programmation !
              <br />
              <br />Je maitrise des classics comme le
              <i>
                <b className="purple"> les moteurs 3D,</b> comme <b className="purple">unity</b> ou <b className="purple">unreal Engine</b>.
              </i>
              <br />
              <br />
                Je suis extremement intéressé par les jeux vidéo, mais aussi par la création de site, ou application internet grâce&nbsp;
              <i>
                <b className="purple">aux technologies web</b> and
                also in areas related to{" "}
              </i>
              <br />
              <br />
              J'adore développer des technologies autour de <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  des framworks récents
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React ou Angular</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVE MOI SUR</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JeremyMcdr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/*<li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>*/}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-macadr%C3%A9-795164232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/macadrejeremy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
