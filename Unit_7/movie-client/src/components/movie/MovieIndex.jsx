import React from "react";
import MovieCreate from "./MovieCreate";
import { Col, Container, Row } from "reactstrap";

export default function MovieIndex(props) {
  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <MovieCreate token={props.token} />
          </Col>
          <Col md="8">[TABLE GOES HERE!]</Col>
        </Row>
      </Container>
    </>
  );
}
