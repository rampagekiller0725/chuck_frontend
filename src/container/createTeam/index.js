import React from "react";
import { Link } from "react-router-dom";
import { TextInput, Button, Grid, Textarea, Divider } from "@mantine/core";
import "./index.css";

export default function CreateTeam() {
  const teamMembers = [
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchenko06@gmail.com",
    },
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchenko06@gmail.com",
    },
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchenko06@gmail.com",
    },
  ];
  return (
    <div className="create-team-page">
      <h1>Create Team</h1>
      <div className="create-team-content">
        <Grid>
          <Grid.Col xs={12}>
            <TextInput label="Team Name" placeholder="Team Name" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col xs={12}>
            <Textarea label="Description" placeholder="Description" />
          </Grid.Col>
        </Grid>
        <Grid sx={{ marginBottom: "20px" }}>
          <Grid.Col xs={9}>
            <TextInput
              label="Add Team Members"
              placeholder="Add Team Members"
            />
          </Grid.Col>
          <Grid.Col xs={3}>
            <Button
              className="team-member-add"
              sx={{
                width: "100%",
                backgroundColor: "#2F73D7",
                top: "23px",
                padding: "5px",
                "@media (max-width: 755px)": {
                  top: "0px",
                },
              }}
            >
              +Add
            </Button>
          </Grid.Col>
        </Grid>
        {teamMembers.map((member, index) => (
          <div key={member.name + index + "team"}>
            <Grid>
              <Grid.Col xs={2}>
                <img src={member.img} alt="owner" />
              </Grid.Col>
              <Grid.Col xs={7}>
                <p
                  style={{
                    margin: "0px",
                    fontWeight: "bold",
                    fontSize: "0.9em",
                  }}
                >
                  {member.name}
                </p>
                <p style={{ margin: "0px", fontSize: "0.7em" }}>
                  {member.mail}
                </p>
              </Grid.Col>
            </Grid>
            <Divider sx={{ margin: "10px 0" }} />
          </div>
        ))}
        <Link to="/landing" style={{width: "100%", textAlign: "center"}}>
          <Button
            className="team-create"
            sx={{
              width: "100%",
              backgroundColor: "#2F73D7",
              top: "23px",
              padding: "5px",
            }}
          >
            Create Team
          </Button>
        </Link>
      </div>
    </div>
  );
}
