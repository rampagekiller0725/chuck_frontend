import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  TextInput,
  Button,
  Grid,
  Select,
  MultiSelect,
  FileInput,
  Text,
} from "@mantine/core";
import "./index.css";

export default function Profile() {
  const uploadImgRef = useRef();
  const uploadImg = () => {
    uploadImgRef.current.click();
  };
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-content">
        <Grid
          className="profile-img"
          sx={{ marginBottom: "30px", position: "relative" }}
        >
          <img src="/assets/img/img_default_avatar.png" alt="profileImg" />
          <Text
            className="upload-img-btn"
            sx={{
              cursor: "pointer",
              position: "absolute",
              bottom: "0",
              right: "50%",
              transform: "translate(100px, 0)",
            }}
            onClick={uploadImg}
          >
            edit
          </Text>
          <FileInput
            ref={uploadImgRef}
            label="Upload files"
            placeholder="Upload files"
            sx={{ display: "none" }}
            multiple
          />
        </Grid>
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
            <TextInput label="Company Name" placeholder="Company Name" />
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
        <Grid sx={{ marginTop: "40px" }}>
          <Link to="/landing" style={{width: "100%", textAlign: "center"}}>
            <Button
              className="profile-update"
              sx={{
                width: "50%",
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
