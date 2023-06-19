import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiUnity,
    SiUnrealengine,
    SiThreedotjs
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={4} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={4} className="tech-icons">
        <SiThreedotjs />
      </Col>
    </Row>
  );
}

export default Toolstack;
