import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Tour from "./Tour";

const useStyles = makeStyles({
  container: {
    width: "400px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "20px",
    textAlign: "center",
    "& span": {
      borderBottom: "2px solid cyan",
    },
  },
});

// 展示所有tours列表的组件
const Tours = ({ tours, removeTour }) => {
  const classes = useStyles();

  const tourList = tours.map((tour) => {
    return <Tour tour={tour} key={tour.id} removeTour={removeTour} />;
  });

  return (
    <section className={classes.container}>
      <Typography component="h3" variant="h4" className={classes.header}>
        <span>Our Tours</span>
      </Typography>
      <Grid container spacing={2}>
        {tourList}
      </Grid>
    </section>
  );
};

export default Tours;
