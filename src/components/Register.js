import React, { useState } from "react";
import { Typography, Form, Input, Button } from "antd";
import { registerservice } from "../service/loginservice";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleregisterSubmit = async () => {
    try {
      const res = await registerservice(name, email, password);
      if (res === 200) {
      }
    } catch (err) {
      console.log(err, "err");
      // Error handling or feedback message
    }
  };
  return (
    <div className="login_page">
      <div></div>
      <div className="login-inputs">
        <span></span>
        <Typography
          style={{
            fontSize: "20px",
            fontWeight: "600px",
            color: "teal",
            paddingTop: "15px",
          }}
        >
          Register
        </Typography>
        <span>
          <Form className="login-form">
            <Form.Item>
              <Input
                placeholder="Username"
                className="login-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Email"
                className="login-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button className="login-button" onClick={handleregisterSubmit}>
                Register
              </Button>
            </Form.Item>

            <span>
              <Typography>
                Do you have an account?{" "}
                <Link style={{ color: "#3F7C7D" }} to="/login">
                  Login
                </Link>
              </Typography>
            </span>
          </Form>
        </span>
      </div>
    </div>
  );
}

export default Register;
