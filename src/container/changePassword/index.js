import React from "react";
import { Link } from "react-router-dom";
import { PasswordInput, Button, Grid } from "@mantine/core";
import "./index.css";

export default function ChangePassword() {
  return (
    <div className="change-password-page">
      <h1>Change my password</h1>
      <div className="change-password-content">
        <Grid>
          <Grid.Col xs={12}>
            <PasswordInput
              label="Enter Current Password"
              placeholder="Current password"
              id="current-password"
              sx={{
                paddingTop: "20px",
              }}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col xs={12}>
            <PasswordInput
              label="New Password"
              placeholder="New password"
              id="new-password"
              sx={{
                paddingTop: "20px",
              }}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col xs={12}>
            <PasswordInput
              label="Re-type New Password"
              placeholder="Retype New password"
              id="retype-new-password"
              sx={{
                paddingTop: "20px",
              }}
            />
          </Grid.Col>
        </Grid>
        <Grid sx={{ textAlign: "center", marginTop: "40px" }}>
          <Link to="/landing" style={{width: "100%", textAlign: "center"}}>
            <Button
              className="profile-update"
              sx={{
                width: "100%",
                backgroundColor: "#2F73D7",
                margin: "auto",
              }}
            >
              Update
            </Button>
          </Link>
        </Grid>
      </div>
    </div>
  );
}
