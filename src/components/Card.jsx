import { Grid } from "@mui/material";
import Loging from "./Loging";
export default function Card() {
    return(
        <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: "90vh" }}
  >
    <Grid item xs={3}>
      <div>
          <h1 style={{ color: "white" }}>
              <Loging/>
          </h1>
      </div>
    </Grid>
  </Grid>
    );
  
}
