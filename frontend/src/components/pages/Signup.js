import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match"); //return because we wanna immediately exit out if thr is an error
    }

    try {
      setError(""); //thr is no error at the start
      setLoading(true); //dw user to keep clicking the sign up button n end up creating too many accts
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/"); //bring u to the home page aft signup is done
    } catch (error) {
      setError(
        "An account with this email already exists, would you like to log in instead?"
      );
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 id="pageHeader">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            {/* form group */}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              {/* ref is to get the value when you submit the form */}
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              disabled={loading}
              type="submit"
              style={{ width: "100px", height: "35px" }}
              id="buttonStyle2"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?{" "}
        <Link to="/sign-in" id="linkStyle">
          Log In
        </Link>
      </div>
    </>
  );
}
