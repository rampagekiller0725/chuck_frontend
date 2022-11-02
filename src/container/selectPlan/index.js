import React from "react";
import { Link } from "react-router-dom";
import PlanCard from "../../component/planCard";
import { Button } from "@mantine/core";

import "./index.css";

function SelectPlan() {
  return (
    <div className="selectplan-page">
      <h1>Select your plan</h1>
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <div className="next-btn">
        <Link to="/paymentinfo">
          <Button
            className="submit"
            sx={{
              width: "30%",
              height: "50px",
              backgroundColor: "#2F73D7",
            }}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SelectPlan;
