import React from "react";
import Header from "../../component/header";
import './index.css';

export default function Landing(props) {
  const links = [
    {
      link: "/dashboard",
      label: "Dashboard",
    },
    {
      link: "/qrcodes",
      label: "QR Codes",
    },
    {
      link: "/users",
      label: "Users",
    },
  ];
  return (
    <div className="landing-page">
      <Header links={links} />
      <div className="content">{props.content}</div>
    </div>
  );
}
