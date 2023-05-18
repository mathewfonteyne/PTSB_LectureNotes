// To use and access Reactstrap components we need to import them:
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useState, useRef } from "react";

export default function Signup() {
  // useState() to capture our firstName value and be able to update it with setFirstName(<-- state function)
  // const [firstName, setFirstName] = useState(""); // Updating to use useRef() instead.

  // Use useRef() so updating values does not refresh/rerender the component
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // We need to build out the handle submit function. Made async to handle awaiting the fetch.
  async function handleSubmit(e) {
    // Stop the page from refreshing when the for submits
    e.preventDefault();
    // console.log("firstName:", firstNameRef);

    // Creating a variable that holds each input's ref value
    const firstName = firstNameRef.current.value;
    // console.log(firstName);
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // The server expects json, we need to build and json-ify a user object to send to our server
    let bodyObj = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    });

    // console.log(bodyObj);

    // Construct the pieces of our fetch functionality (allows us to call to the server)
    // Declare a url variable and it's value is the endpoint we will fetch to
    const url = "http://localhost:4000/user/signup";
    // Our request needs Headers to be processed/accepted, we can build headers with the Headers constructor
    const headers = new Headers();
    //* Setting our headers to accept the JSON object within the browser.
    headers.append("Content-Type", "application/json");

    // Create a variable to house the content of the request to the server: headers, request body (bodyObj), request method type: POST/PUT/GET/DELETE/PATCH
    const requestOptions = {
      headers,
      body: bodyObj,
      method: "POST",
    };

    // Use try/catch for our async fetch
    try {
      // Build an async fetch, fetch will use the url and requestOptions object
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First Name:</Label>
          <Input innerRef={firstNameRef} autoComplete={"off"} />
        </FormGroup>
        <FormGroup>
          <Label>Last Name:</Label>
          <Input innerRef={lastNameRef} autoComplete={"off"} />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input innerRef={emailRef} type="email" autoComplete={"off"} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input innerRef={passwordRef} type="password" autoComplete={"off"} />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
}
