import React from "react";

import { CssBaseline, Grid } from "@mui/material";

import Header from "./components/Header/Header.component";
import Map from "./components/Map/Map.component";
import List from "./components/List/List.component";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
