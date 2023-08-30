import { Typography, Form, Input, Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginservice } from "../service/loginservice";

import { useNavigate } from "react-router-dom";
import "./login.css";
import { getAuthToken, setAuthToken } from "../service/Authtoken";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState(false);
  const navigate = useNavigate();
  const submitLoginForm = async () => {
    try {
      const res = await loginservice(email, password);

      console.log(res.data.token);
      if (res.status === 200) {
        setAuthToken(res.data.token);
        console.log(res, "hhhh");
        navigate("/dashboard");
        // <Navigate to="/" replace={true} />;
      }
    } catch (err) {
      console.log(err);
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
          Login
        </Typography>
        <span>
          <Form
            className="login-form"
            //onFinish={onFinish}
          >
            <Form.Item>
              <Input
                // onMouseDown={}
                placeholder="Username"
                className="login-input"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            {email.length === 0 && errormessage ? (
              <span>Enter the username</span>
            ) : (
              ""
            )}
            <Form.Item name="password">
              <Input
                placeholder="Password"
                className="login-input"
                required
                value={password}
                // onChange={handleChange}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                onClick={submitLoginForm}
              >
                Login
              </Button>
            </Form.Item>

            <span>
              <Typography>
                Don't you have an account?{" "}
                <Link style={{ color: "#3F7C7D" }} to="/register">
                  Register
                </Link>
              </Typography>
            </span>
          </Form>
        </span>
      </div>
    </div>
  );
}

export default Login;
