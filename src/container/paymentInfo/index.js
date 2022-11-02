import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Button,
  TextInput,
  Grid,
} from "@mantine/core";
import "./index.css";

function PaymentInfo() {
  return (
    <div className="paymentinfo-page container-fluid">
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        <div className="paymentinfo-form">
          <h1>Enter Payment Info</h1>
          <TextInput label="Name on card" placeholder="Name on card" sx={{marginBottom:"10px"}}/>
          <TextInput label="Card number" placeholder="Card number" sx={{marginBottom:"10px"}}/>
          <Grid sx={{marginBottom:"10px"}}>
            <Grid.Col xs={8}>
              <TextInput
                label="First Name"
                placeholder="First name"
                breakpoints={{ cols: 2 }}
              />
            </Grid.Col>
            <Grid.Col xs={4}>
              <TextInput label="Last Name" placeholder="Last name" />
            </Grid.Col>
          </Grid>
          <TextInput label="Address" placeholder="Address" sx={{marginBottom:"10px"}}/>

          <Grid sx={{marginBottom:"10px"}}>
            <Grid.Col xs={4}>
              <TextInput label="City" placeholder="Address" />
            </Grid.Col>
            <Grid.Col xs={4}>
              <TextInput label="State" placeholder="State" />
            </Grid.Col>
            <Grid.Col xs={4}>
              <TextInput label="Postal code" placeholder="Postal code" />
            </Grid.Col>
          </Grid>
          <Grid sx={{marginBottom:"10px"}}>
            <Grid.Col xs="6">
              <Link to="/selectplan">
                <Button
                  className="submit"
                  sx={{
                    width: "100%",
                    backgroundColor: "#333333",
                    "&:hover": {
                      backgroundColor: "#555555",
                    },
                    marginTop: "20px",
                  }}
                >
                  Back
                </Button>
              </Link>
            </Grid.Col>
            <Grid.Col xs="6">
              <Link to="/landing">
                <Button
                  className="submit"
                  sx={{
                    width: "100%",
                    backgroundColor: "#2F73D7",
                    marginTop: "20px",
                  }}
                >
                  Next
                </Button>
              </Link>
            </Grid.Col>
          </Grid>
        </div>
        <div className="logo">
          <img src="/assets/img/logo.png" alt="logo" />
        </div>
      </SimpleGrid>
    </div>
  );
}

export default PaymentInfo;
