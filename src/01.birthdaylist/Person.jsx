import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

// 将每一个人的生日信息单独抽离成一个组件负责管理样式和功能
const Person = (person) => {
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar src={person.image} />
      </ListItemAvatar>
      <ListItemText
        primary={person.name}
        secondary={person.age + " years old"}
      ></ListItemText>
    </ListItem>
  );
};

export default Person;
