import React from "react";
import Review from "./Review";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  },
  underline: {
    height: "2px",
    width: "40%",
    backgroundColor: "cyan",
  },
});



const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.container}>
      <header className={classes.reviewHeader}>
        <Typography variant="h3">Our Reviews</Typography>
        <div className={classes.underline}></div>
      </header>

      <Review />
    </main>
  );
};

export default App;
