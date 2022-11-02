import { Grid, Container, Button } from "@mantine/core";
import "./index.css";
export default function PlanCard() {
  return (
    <div className="plan-card">
      <Container my="md">
        <Grid className="member-ship1">
          <Grid.Col xs={7} sx={{ padding: "20px" }}>
            <h2 className="plan-card-title">Trial Membership</h2>
            <p className="plan-card-description"></p>
            <p className="primary-text">
              What's included<span className="line"></span>
            </p>
            <p className="plan-card-included">
              <span className="check">✔</span>Private forum access
            </p>
            <p className="plan-card-included">
              <span className="check">✔</span>Entry to annual conference
            </p>
          </Grid.Col>
          <Grid.Col xs={5}>
            <div className="payment-card">
              <h2 className="payment-card-title">No payment required</h2>
              <Button
                className="access-btn"
                sx={{
                  width: "80%",
                  backgroundColor: "#333333",
                  height: "40px",
                  "&:hover": {
                    backgroundColor: "#555555",
                  },
                }}
              >
                Get Access
              </Button>
              <p>
                Get a free sample<span className="grey">(20MB)</span>
              </p>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
