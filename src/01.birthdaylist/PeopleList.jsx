import React, { useState } from "react";
import { List, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Person from "./Person";
import data from "./data";

// 设置样式
const flexRightStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

const PeopleList = () => {
  // 保存people数据作为状态
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  // 根据数据映射成组件
  const birthdays = people.map((person) => {
    return <Person key={person.id} {...person} />;
  });

  return (
    <main>
      {/* 生日列表的标题 */}
      <Typography align="center" component={"h3"}>
        一共有 {people.length} 人
      </Typography>
      {/* 包含所有人的生日的列表 */}
      <List>{birthdays}</List>
      {/* 清空列表的标签 */}
      <div style={flexRightStyle}>
        <Button variant="contained" color="primary" onClick={clearAll}>
          Clear All
        </Button>
      </div>
    </main>
  );
};

export default PeopleList;
