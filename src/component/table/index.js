import { Link } from "react-router-dom";
import { Table, Anchor, ScrollArea, Button, Grid } from "@mantine/core";
import "./index.css";

export default function DataTable({ tableType, data }) {
  var rows = {};
  if (tableType === 1) {
    rows = data.map((row, index) => {
      return (
        <tr key={row.name + index + "users"}>
          <td className="users-name">
            <Anchor
              size="sm"
              sx={{ color: "#333333" }}
              onClick={(event) => event.preventDefault()}
            >
              <Grid>
                <Grid.Col xs={1}>
                  <img src={row.img} alt="owner" />
                </Grid.Col>
                <Grid.Col xs={11}>
                  <p
                    style={{
                      margin: "0px",
                      fontWeight: "bold",
                      fontSize: "0.9em",
                    }}
                  >
                    {row.name}
                  </p>
                  <p style={{ margin: "0px", fontSize: "0.8em" }}>{row.mail}</p>
                </Grid.Col>
              </Grid>
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ color: "#333333" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.role}
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ color: "#333333" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.teams}
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ fontWeight: "bold" }}
              onClick={(event) => event.preventDefault()}
            >
              edit
            </Anchor>
          </td>
        </tr>
      );
    });
  } else if (tableType === 2) {
    rows = data.map((row, index) => {
      return (
        <tr key={row.name + index + "team"}>
          <td>
            <Anchor
              size="sm"
              sx={{ fontWeight: "bold" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.name}
            </Anchor>
          </td>
          <td className="description">
            <p className="description-content">{row.description}</p>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ color: "#2f73d7" }}
              onClick={(event) => event.preventDefault()}
            >
              <img src={row.ownerImg} alt="owner" />
              {row.owner}
            </Anchor>
          </td>
          <td style={{ position: "relative" }}>
            <Anchor
              size="sm"
              sx={{ fontWeight: "bold" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.members.map((member, index) => (
                <img
                  key={"img" + index}
                  src={member}
                  alt={index}
                  style={{
                    right: "10px",
                    bottom: "10px",
                    position: "absolute",
                    zIndex: 1000 - index * 100,
                    transform: "translate(-" + index * 15 + "px,0)",
                    borderRadius: "100%",
                    border: "1px solid white",
                  }}
                />
              ))}
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ fontWeight: "bold" }}
              onClick={(event) => event.preventDefault()}
            >
              ›
            </Anchor>
          </td>
        </tr>
      );
    });
  } else if (tableType === 3) {
    rows = data.map((row, index) => {
      return (
        <tr key={row.title + index + "campaign"}>
          <td>
            <Anchor
              size="sm"
              sx={{ fontWeight: "bold" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.title}
            </Anchor>
          </td>
          <td className="description">
            <p className="description-content">{row.description}</p>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ color: "#2f73d7" }}
              onClick={(event) => event.preventDefault()}
            >
              <img src={row.ownerImg} alt="owner" />
              {row.owner}
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ color: "#2f73d7" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.startDate}
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ color: "#2f73d7" }}
              onClick={(event) => event.preventDefault()}
            >
              {row.endDate}
            </Anchor>
          </td>
          <td>
            <Anchor
              size="sm"
              sx={{ fontWeight: "bold" }}
              onClick={(event) => event.preventDefault()}
            >
              edit
            </Anchor>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      {tableType === 1 && (
        <div>
          <div className="create-campaign">
            <Link to="/createuser">
              <Button
                className="submit"
                sx={{
                  width: "150px",
                  backgroundColor: "#2F73D7",
                  margin: "20px 20px 20px 20px",
                }}
              >
                Create User
              </Button>
            </Link>
          </div>
          <ScrollArea className="table">
            <Table key={1} sx={{ minWidth: 800 }} verticalSpacing="xs">
              <thead>
                <tr>
                  <th className="users-name">Name</th>
                  <th>Role</th>
                  <th>Team(s)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      )}
      {tableType === 2 && (
        <div>
          <div className="create-campaign">
            <Link to="/createteam">
              <Button
                className="submit"
                sx={{
                  width: "150px",
                  backgroundColor: "#2F73D7",
                  margin: "20px 20px 20px 20px",
                }}
              >
                Create Team
              </Button>
            </Link>
          </div>
          <ScrollArea className="table">
            <Table key={2} sx={{ minWidth: 800 }} verticalSpacing="xs">
              <thead>
                <tr>
                  <th>Teams</th>
                  <th className="th-description">Description</th>
                  <th>Owner</th>
                  <th>Members</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      )}
      {tableType === 3 && (
        <div>
          <div className="create-campaign">
            <Link to="/createcampaign">
              <Button
                className="submit"
                sx={{
                  width: "150px",
                  backgroundColor: "#2F73D7",
                  margin: "20px 20px 20px 20px",
                }}
              >
                Create Campaign
              </Button>
            </Link>
          </div>
          <ScrollArea className="table">
            <Table key={3} sx={{ minWidth: 800 }} verticalSpacing="xs">
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th className="th-description">Description</th>
                  <th>Owner</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </div>
      )}
    </>
  );
}
