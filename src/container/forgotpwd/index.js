import React, {useRef, useState} from "react";
import { Autocomplete, Button, Loader } from "@mantine/core";
import "./index.css";

export default function Forgotpwd() {
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
    <div className="forgotpwd-page">
      <h1>Reset your password</h1>
      <p>Enter your email and we'll send you a link to reset your password</p>
      <Autocomplete
        className="forgotpwd-email"
        value={value}
        data={data}
        onChange={handleChange}
        rightSection={loading ? <Loader size={16} /> : null}
        label="Email address"
        placeholder="Your email"
        sx={{
          paddingTop: "20px",
          width: "80%",
          textAlign: "left",
          margin: "auto",
        }}
      />
      <Button
        className="submit"
        sx={{
          width: "80%",
          backgroundColor: "#2F73D7",
          marginTop: "20px",
        }}
      >
        Reset your password
      </Button>
    </div>
  );
}
