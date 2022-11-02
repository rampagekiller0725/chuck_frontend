import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  TextInput,
  Button,
  Grid,
  Select,
  MultiSelect,
  Autocomplete,
  Loader,
} from "@mantine/core";
import "./index.css";

export default function CreateUser() {
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
    <div className="create-user-page">
      <h1>Create Team</h1>
      <div className="create-user-content">
        <Grid>
          <Grid.Col xs={6}>
            <TextInput label="First Name" placeholder="Last Name" />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput label="Last Name" placeholder="Last Name" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col xs={6}>
            <Autocomplete
              className="user-email"
              value={value}
              data={data}
              onChange={handleChange}
              rightSection={loading ? <Loader size={16} /> : null}
              label="Email address"
              placeholder="Your email"
              sx={{
                textAlign: "left",
              }}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <Select
              label="Role"
              placeholder="Pick one"
              data={[
                { value: "owner", label: "Owner" },
                { value: "editor", label: "Editor" },
                { value: "viewer", label: "Viewer" },
              ]}
              sx={{
                textAlign: "left",
              }}
            />
          </Grid.Col>
        </Grid>
        <Grid sx={{ marginBottom: "20px" }}>
          <Grid.Col xs={6}>
            <MultiSelect
              data={[
                "Marketing Team",
                "Canada Team",
                "USA Team",
                "FrontEnd Team",
                "Blockchain Team",
                "React Team",
                "Manager Team",
              ]}
              label="Teams"
              placeholder="Pick all that you participate in"
              searchable
              nothingFound="Nothing found"
            />
          </Grid.Col>
        </Grid>
        <Grid sx={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/landing" style={{width: "100%", textAlign: "center"}}>
            <Button
              className="user-create"
              sx={{
                width: "50%",
                backgroundColor: "#2F73D7",
                margin: "auto",
              }}
            >
              Create User
            </Button>
          </Link>
        </Grid>
      </div>
    </div>
  );
}
