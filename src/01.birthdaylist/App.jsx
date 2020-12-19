import React from "react";

import { Paper } from "@material-ui/core";

import PeopleList from "./PeopleList";

// 设置样式
const containerStyle = {
  margin: "200px auto",
  width: "50%",
  padding: "20px 50px",
};

// 不包含状态，状态可以直接由PeopleList来保存
const App = () => {
  return (
    <Paper style={containerStyle}>
      <PeopleList />
    </Paper>
  );
};

export default App;
