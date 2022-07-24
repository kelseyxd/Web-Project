// just copy from sign up page and remove confirm password!!
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(""); //thr is no error at the start
      setLoading(true); //dw user to keep clicking the sign up button n end up creating too many accts
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/"); //bring us to the home page
    } catch (error) {
      setError("Failed to log in");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="pageHeader">Sign In</h2>
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
            <Button disabled={loading} className="Loginbutton" type="submit">
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" className="loginLink">
              Forgot Password
            </Link>
          </div>
        </Card.Body>
      </Card>
      <div className="linkToSignUp">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </>
  );
}
