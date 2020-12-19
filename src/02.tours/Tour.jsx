import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardMedia: {
    maxHeight: 250,
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
});

// 展示单个tour信息的组件
const Tour = ({ tour, removeTour }) => {
  /**
   * 初始化状态：
   * 1. expanding：文字是否处于展开状态
   */
  const [expanding, setExpanding] = useState(false);

  const classes = useStyles();
  return (
    <Grid item>
      <Card>
        <CardMedia
          component="img"
          image={tour.image}
          title={tour.name}
          className={classes.cardMedia}
        ></CardMedia>

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {tour.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* 根据是否展开来切换文字显示长度 */}
            {expanding ? tour.info : tour.info.slice(0, 150) + "..."}

            {/* 根据是否展开来切换按钮的文字提示 */}
            <Button
              color="primary"
              size="small"
              onClick={() => {
                setExpanding((expanding) => !expanding);
              }}
            >
              {expanding ? "Show Less" : "Show More"}
            </Button>
          </Typography>
        </CardContent>

        <CardActions className={classes.cardAction}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => removeTour(tour.id)}
          >
            Not Interested
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Tour;
