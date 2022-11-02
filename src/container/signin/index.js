import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Autocomplete,
  Loader,
  SimpleGrid,
  Button,
  PasswordInput,
} from "@mantine/core";
import "./index.css";

function Signin() {
  const timeoutRef = useRef(-1);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (val) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0 || val.includes("@")) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ["gmail.com", "outlook.com", "yahoo.com"].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 1000);
    }
  };
  return (
    <div className="signin-page container-fluid">
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        <div className="signin-form">
          <h1>Sign in to your account</h1>
          <p>
            Or{" "}
            <span className="primary-text">Login with an existing account</span>
          </p>
          <Autocomplete
            className="signin-email"
            value={value}
            data={data}
            onChange={handleChange}
            rightSection={loading ? <Loader size={16} /> : null}
            label="Email address"
            placeholder="Your email"
            sx={{
              paddingTop: "20px",
              textAlign: "left",
            }}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            id="your-password"
            sx={{
              paddingTop: "20px",
            }}
          />
          <Link to="/forgotpwd" style={{ textDecoration: "none" }}>
            <p className="forgot-password">Forgot your password?</p>
          </Link>
          <Link to="/landing">
            <Button
              className="submit"
              sx={{
                width: "100%",
                backgroundColor: "#2F73D7",
              }}
            >
              Sign In
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <p className="signup-btn">Create an account</p>
          </Link>
        </div>
        <div className="logo">
          <img src="/assets/img/logo.png" alt="logo" />
        </div>
      </SimpleGrid>
    </div>
  );
}

export default Signin;
