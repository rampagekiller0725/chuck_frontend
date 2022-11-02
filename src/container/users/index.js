import React, { useState } from "react";
import { Button } from "@mantine/core";
import DataTable from "../../component/table";
import "./index.css";

export default function Users() {
  const users_data = [
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchnko06@gmail.com",
      role: "admin",
      teams: ["Aardvark", "Banana"]
    },
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchnko06@gmail.com",
      role: "admin",
      teams: ["Aardvark", "Banana"]
    },
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchnko06@gmail.com",
      role: "admin",
      teams: ["Aardvark", "Banana"]
    },
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchnko06@gmail.com",
      role: "admin",
      teams: ["Aardvark", "Banana"]
    },
    {
      name: "Nikita Semenchenko",
      img: "/assets/img/img_default_avatar.png",
      mail: "nikitasemenchnko06@gmail.com",
      role: "admin",
      teams: ["Aardvark", "Banana"]
    },
  ];
  const teams_data = [
    {
        name: "Adavark TEAM",
        description: "The href attribute is required for an anchor to be keyboard accessible. Provide a vali",
        owner: "Nikita Semenchenko",
        ownerImg: "/assets/img/img_default_avatar.png",
        members: [
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
        ]

    },
    {
        name: "Adavark TEAM",
        description: "The href attribute is required for an anchor to be keyboard accessible. Provide a vali",
        owner: "Nikita Semenchenko",
        ownerImg: "/assets/img/img_default_avatar.png",
        members: [
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
        ]

    },
    {
        name: "Adavark TEAM",
        description: "The href attribute is required for an anchor to be keyboard accessible. Provide a vali",
        owner: "Nikita Semenchenko",
        ownerImg: "/assets/img/img_default_avatar.png",
        members: [
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
        ]

    },
    {
        name: "Adavark TEAM",
        description: "The href attribute is required for an anchor to be keyboard accessible. Provide a vali",
        owner: "Nikita Semenchenko",
        ownerImg: "/assets/img/img_default_avatar.png",
        members: [
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
        ]

    },
    {
        name: "Adavark TEAM",
        description: "The href attribute is required for an anchor to be keyboard accessible. Provide a vali",
        owner: "Nikita Semenchenko",
        ownerImg: "/assets/img/img_default_avatar.png",
        members: [
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
            "/assets/img/img_default_avatar.png",
        ]

    },
  ]
  const [tableIndex, setTableIndex] = useState(1);
  
  const color_info = [
    {
        color: "#333333",
        backgroundColor: "white",
    },
    {
        color: "#2f73d7",
        backgroundColor: "rgb(249,250,251)",
    },
  ]
  return (
    <div className="users-page">
      <h1>Users</h1>
      <div className="btn-group">
        <Button
          className="submit"
          sx={{
            width: "100px",
            backgroundColor: color_info[1-tableIndex].backgroundColor,
            color: color_info[1-tableIndex].color,
            "&:hover": {
              backgroundColor: "rgb(249,250,251)",
              color: "#2f73d7",
            },
            margin: "20px 20px 20px 20px",
          }}
          onClick={() => setTableIndex(0)}
        >
          Users
        </Button>
        <Button
          className="submit"
          sx={{
            width: "100px",
            backgroundColor: color_info[tableIndex].backgroundColor,
            color: color_info[tableIndex].color,
            "&:hover": {
              backgroundColor: "rgb(249,250,251)",
              color: "#2f73d7",
            },
            margin: "20px 20px 20px 20px",
          }}
          onClick={() => setTableIndex(1)}
        >
          Teams
        </Button>
      </div>
      {tableIndex === 1 && (
        <div className="teams-content">
          <DataTable tableType={2} data={teams_data} />
        </div>
      )}
      {tableIndex === 0 && (
        <div className="users-content">
            <DataTable tableType={1} data={users_data} />
        </div>
      )}
    </div>
  );
}
