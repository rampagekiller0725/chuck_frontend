import React, { useState } from "react";
import { Button } from "@mantine/core";
import DataTable from "../../component/table";
import "./index.css";

export default function QRCodes() {
  const data = [
    {
      title: "Arizona Festival",
      description:
        "The href attribute is required for an anchor to be keyboard accessible. Provide a valid",
      ownerImg: "/assets/img/img_default_avatar.png",
      owner: "Nikita Semenchenko",
      startDate: "5/1/2022",
      endDate: "7/1/2022",
    },
    {
      title: "Arizona Festival",
      description:
        "The href attribute is required for an anchor to be keyboard accessible. Provide a valid",
      ownerImg: "/assets/img/img_default_avatar.png",
      owner: "Nikita Semenchenko",
      startDate: "5/1/2022",
      endDate: "7/1/2022",
    },
    {
      title: "Arizona Festival",
      description:
        "The href attribute is required for an anchor to be keyboard accessible. Provide a valid",
      ownerImg: "/assets/img/img_default_avatar.png",
      owner: "Nikita Semenchenko",
      startDate: "5/1/2022",
      endDate: "7/1/2022",
    },
    {
      title: "Arizona Festival",
      description:
        "The href attribute is required for an anchor to be keyboard accessible. Provide a valid",
      ownerImg: "/assets/img/img_default_avatar.png",
      owner: "Nikita Semenchenko",
      startDate: "5/1/2022",
      endDate: "7/1/2022",
    },
    {
      title: "Arizona Festival",
      description:
        "The href attribute is required for an anchor to be keyboard accessible. Provide a valid",
      ownerImg: "/assets/img/img_default_avatar.png",
      owner: "Nikita Semenchenko",
      startDate: "5/1/2022",
      endDate: "7/1/2022",
    },
    {
      title: "Arizona Festival",
      description:
        "The href attribute is required for an anchor to be keyboard accessible. Provide a valid",
      ownerImg: "/assets/img/img_default_avatar.png",
      owner: "Nikita Semenchenko",
      startDate: "5/1/2022",
      endDate: "7/1/2022",
    },
  ];
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
  const [tableIndex, setTableIndex] = useState(1);
  return (
    <div className="qrcodes-page">
      <h1>QR Codes</h1>
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
          QR Codes
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
          Campaigns
        </Button>
      </div>
      {!tableIndex && (
        <div className="qrcodes-content">
        </div>
      )}
      {tableIndex && (
        <div className="campaigns-content">
          <DataTable tableType={3} data={data} />
        </div>
      )}
    </div>
  );
}
