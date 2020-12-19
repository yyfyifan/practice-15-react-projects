import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const dataURL = "https://course-api.com/react-tours-project";

// 样式
const useStyles = makeStyles({
  content: {
    paddingTop: "100px",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20vh",
    boxSizing: "border-box",
    height: "100vh",
    "& h2": {
      textAlign: "center",
    },
  },
});

const App = () => {
  /**
   * 初始化状态
   * 1. loading：是否正在处于加载数据状态
   * 2. tours：保存的tours的数据列表
   */
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours((tours) => {
      return tours.filter((tour) => tour.id !== id);
    });
  };

  const fetchTours = async () => {
    // 确保loading状态为true
    setLoading(true);
    try {
      const response = await fetch(dataURL);
      const data = await response.json();
      console.log(data);
      setTours(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 第一次渲染后获取数据
  useEffect(() => {
    fetchTours();
  }, []);

  const classes = useStyles();

  /**
   * 条件渲染不同数据
   */
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main className={classes.empty}>
        <Typography component="h2" variant="h4">
          No Tour Left
        </Typography>
        <Button onClick={() => fetchTours()}>刷新列表</Button>
      </main>
    );
  }

  return (
    <main className={classes.content}>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
