import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Col,
  Container,
  Input,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import FullButton from "../buttons/FullButton";

export default function MovieEdit(props) {
  const { id } = useParams();
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieLength, setMovieLength] = useState("");
  const [movieReleased, setMovieReleased] = useState("");

  // Code for form inputs (form data)
  let ratings = [null, "G", "PG", "PG-13", "NC-17", "R"];
  let genre = [
    null,
    "Comedy",
    "Drama",
    "Action",
    "Horror",
    "Thriller",
    "Family",
    "Documentary",
  ];

  const yearRange = () => {
    let years = [null];
    const thisYear = new Date().getFullYear();

    for (let i = thisYear; i >= 1892; i--) years.push(i);

    return (
      <>
        <Input
          type="select"
          value={movieReleased}
          onChange={(e) => setMovieReleased(e.target.value)}
        >
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </Input>
      </>
    );
  };

  // handleSubmit to run fetch etc.
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Edit Movie
      </h1>
      <Container>
        <Row>
          <Col md="4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              sequi tempore vitae cupiditate blanditiis, a asperiores veniam
              explicabo totam nam exercitationem fuga illum, officia tempora
              dignissimos amet? Placeat, blanditiis. Saepe.
            </p>
          </Col>
          <Col md="8">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label>Genre</Label>
                <Input
                  value={movieGenre}
                  onChange={(e) => setMovieGenre(e.target.value)}
                  type="select"
                  autoComplete="off"
                >
                  {genre.map((g, i) => (
                    <option key={i} value={g}>
                      {g}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Rating</Label>
                <Input
                  value={movieRating}
                  onChange={(e) => setMovieRating(e.target.value)}
                  type="select"
                  autoComplete="off"
                >
                  {ratings.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Length</Label>
                <Input
                  value={movieLength}
                  onChange={(e) => setMovieLength(e.target.value)}
                  type="number"
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label>Release Year</Label>
                {yearRange()}
              </FormGroup>
              <FullButton>
                <Button color="success">Add Movie</Button>
              </FullButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
