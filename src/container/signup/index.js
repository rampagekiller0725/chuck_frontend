import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Autocomplete,
  Loader,
  SimpleGrid,
  Button,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import "./index.css";

function Signup() {
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
    <div className="signup-page container-fluid">
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        <div className="signup-form">
          <h1>Get Started</h1>
          <SimpleGrid
            cols={2}
            breakpoints={[
              { maxWidth: "md", cols: 2 },
              { maxWidth: "sm", cols: 1 },
            ]}
          >
            <TextInput label="First Name" placeholder="First name" />
            <TextInput label="Last Name" placeholder="Last name" />
          </SimpleGrid>
          <SimpleGrid
            cols={2}
            breakpoints={[
              { maxWidth: "md", cols: 2 },
              { maxWidth: "sm", cols: 1 },
            ]}
          >
            <Autocomplete
              className="signup-email"
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
            <TextInput
              label="Company (Optional)"
              placeholder="Company"
              sx={{ paddingTop: "20px" }}
            />
          </SimpleGrid>

          <SimpleGrid
            cols={2}
            breakpoints={[
              { maxWidth: "md", cols: 2 },
              { maxWidth: "sm", cols: 1 },
            ]}
          >
            <PasswordInput
              label="Password"
              placeholder="Your password"
              id="your-password"
              sx={{
                paddingTop: "20px",
              }}
            />

            <PasswordInput
              label="Re-Type Password"
              placeholder="Retyp password"
              id="your-password-confirm"
              sx={{
                paddingTop: "20px",
              }}
            />
          </SimpleGrid>
          <Link to="/selectplan">
            <Button
              className="submit"
              sx={{
                width: "100%",
                backgroundColor: "#2F73D7",
                marginTop: "20px",
              }}
            >
              Next
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="signup-btn">Already have an account? Sign In</p>
          </Link>
        </div>
        <div className="logo">
          <img src="/assets/img/logo.png" alt="logo" />
        </div>
      </SimpleGrid>
    </div>
  );
}

export default Signup;
