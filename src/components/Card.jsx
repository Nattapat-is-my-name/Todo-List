import { Grid } from "@mui/material";
export default function Card(props) {
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
              {props.children}
          </h1>
      </div>
    </Grid>
  </Grid>
    );
  
}
