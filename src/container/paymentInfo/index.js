import React from "react";
import { Link } from "react-router-dom";
import {
  SimpleGrid,
  Button,
  TextInput,
  Grid,
  Select,
  NumberInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "./index.css";

function PaymentInfo() {
  const stateInfo = [
    "Alabama 	AL",
    "Kentucky 	KY",
    "Ohio 	OH",
    "Alaska 	AK",
    "Louisiana 	LA",
    "Oklahoma 	OK",
    "Arizona 	AZ",
    "Maine 	ME",
    "Oregon 	OR",
    "Arkansas 	AR",
    "Maryland 	MD",
    "Pennsylvania 	PA",
    "American Samoa 	AS",
    "Massachusetts 	MA",
    "Puerto Rico 	PR",
    "California 	CA",
    "Michigan 	MI",
    "Rhode Island 	RI",
    "Colorado 	CO",
    "Minnesota 	MN",
    "South Carolina 	SC",
    "Connecticut 	CT",
    "Mississippi 	MS",
    "South Dakota 	SD",
    "Delaware 	DE",
    "Missouri 	MO",
    "Tennessee 	TN",
    "District of Columbia 	DC",
    "Montana 	MT",
    "Texas 	TX",
    "Florida 	FL",
    "Nebraska 	NE",
    "Trust Territories 	TT",
    "Georgia 	GA",
    "Nevada 	NV",
    "Utah 	UT",
    "Guam 	GU",
    "New Hampshire 	NH",
    "Vermont 	VT",
    "Hawaii 	HI",
    "New Jersey 	NJ",
    "Virginia 	VA",
    "Idaho 	ID",
    "New Mexico 	NM",
    "Virgin Islands 	VI",
    "Illinois 	IL",
    "New York 	NY",
    "Washington 	WA",
    "Indiana 	IN",
    "North Carolina 	NC",
    "West Virginia 	WV",
    "Iowa 	IA",
    "North Dakota 	ND",
    "Wisconsin 	WI",
    "Kansas 	KS",
    "Northern Mariana Islands 	MP",
    "Wyoming 	WY",
  ];
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
          <TextInput
            label="Name on card"
            placeholder="Name on card"
            sx={{ marginBottom: "10px" }}
          />
          <TextInput
            label="Card number"
            placeholder="Card number"
            sx={{ marginBottom: "10px" }}
          />
          <Grid sx={{ marginBottom: "10px" }}>
            <Grid.Col xs={8}>
              <DatePicker
                allowFreeInput
                placeholder="Expiration date"
                label="Expiration date(MM/YY)"
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col xs={4}>
              <NumberInput
                label="CVC"
                placeholder="CVC"
                max={120}
                min={0}
              />
            </Grid.Col>
          </Grid>
          <TextInput
            label="Address"
            placeholder="Address"
            sx={{ marginBottom: "10px" }}
          />

          <Grid sx={{ marginBottom: "10px" }}>
            <Grid.Col xs={4}>
              <TextInput label="City" placeholder="Address" />
            </Grid.Col>
            <Grid.Col xs={4}>
              <Select
                label="State"
                placeholder="State"
                searchable
                nothingFound="No options"
                data={stateInfo}
              />
            </Grid.Col>
            <Grid.Col xs={4}>
              <TextInput label="Postal code" placeholder="Postal code" />
            </Grid.Col>
          </Grid>
          <Grid sx={{ marginBottom: "10px" }}>
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
