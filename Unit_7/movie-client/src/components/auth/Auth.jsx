// Signup is child of Auth.jsx, import below
import Signup from "./signup/Signup";
// Login is child of Auth.jsx, importing below
import Login from "./login/Login";
// Container is Reactstrap's resizing div with grid rows and columns
// https://getbootstrap.com/docs/5.3/layout/grid/
import { Col, Container, Row } from "reactstrap";

export default function Auth(props) {
  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <Signup updateToken={props.updateToken} />
          </Col>
          <Col md="6">
            <Login updateToken={props.updateToken} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
