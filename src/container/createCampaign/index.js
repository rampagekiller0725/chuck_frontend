import React from "react";
import { Link } from "react-router-dom";
import {
  TextInput,
  Button,
  Grid,
  Checkbox,
  Textarea,
  Divider,
  Text,
} from "@mantine/core";
import "./index.css";

export default function CreateCampaign() {
  const campaignMembers = [
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
    <div className="create-campaign-page">
      <h1>Create Campaign</h1>
      <div className="create-campaign-content">
        <Grid>
          <Grid.Col xs={12}>
            <TextInput label="Campaign Name" placeholder="Campaign Name" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col xs={12}>
            <Textarea label="Description" placeholder="Description" />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col xs={6}>
            <TextInput label="Start Date" placeholder="Start Date" />
          </Grid.Col>
          <Grid.Col xs={6}>
            <TextInput label="End Date" placeholder="End Date" />
          </Grid.Col>
        </Grid>
        <Grid sx={{ marginBottom: "20px" }}>
          <Grid.Col xs={9}>
            <TextInput label="Start Date" placeholder="Start Date" />
          </Grid.Col>
          <Grid.Col xs={3}>
            <Button
              className="campaign-member-add"
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
        {campaignMembers.map((member, index) => (
          <div key={member.name + index}>
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
              <Grid.Col
                xs={3}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transform: "translate(60px, 0)",
                  "@media (max-width: 755px)": {
                    transform: "translate(0, 0)",
                  },
                }}
              >
                <Checkbox label="Editor" size="md" />
              </Grid.Col>
            </Grid>
            <Divider sx={{ margin: "10px 0" }} />
          </div>
        ))}
        <Text sx={{ fontSize: "0.8em", marginLeft: "50px" }}>
          Marketing Team
        </Text>
        <Link to="/landing" style={{width: "100%", textAlign: "center"}}>
          <Button
            className="campaign-create"
            sx={{
              width: "100%",
              backgroundColor: "#2F73D7",
              top: "23px",
              padding: "5px",
            }}
          >
            Create Campaign
          </Button>
        </Link>
      </div>
    </div>
  );
}
