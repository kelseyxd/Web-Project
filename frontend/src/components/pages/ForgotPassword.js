//copy the whole login.js and get rid of passwordRef, password Group, history.push etc
// just copy from sign up page and remove confirm password!!
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //set message to an empty string at first
      setMessage("");
      setError(""); //thr is no error at the start
      setLoading(true); //dw user to keep clicking the sign up button n end up creating too many accts
      await resetPassword(emailRef.current.value);
      //success message shown
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Failed to reset password");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="pageHeader">Password Reset</h2>
          {/* if thr is an error and ... */}
          {/* display the error message that u have previously set using serError (useState), as an alert */}
          {/* diff variant will give u diff colour of alert */}
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            {/* form group */}
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              {/* ref is to get the value when you submit the form */}
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/sign-in">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </>
  );
}
