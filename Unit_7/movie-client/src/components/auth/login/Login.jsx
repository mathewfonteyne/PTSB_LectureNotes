import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ updateToken }) {
  // Build our refs
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  // Start base handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);

    // Build body object (request body)
    let body = JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    // Declare and initialize our url
    const url = "http://localhost:4000/user/login";
    // Try/catch = fetch w/ request options in fetch
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: body,
      });
      const data = await res.json();
      // console.log(data);

      // Pass the data token value to my updateToken
      if (data.message === "Login successful!") {
        updateToken(data.token);
        navigate("/movie");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            placeholder="Email"
            innerRef={emailRef}
            type="email"
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Password"
            innerRef={passwordRef}
            type="password"
            autoComplete="off"
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
