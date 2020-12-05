import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const PeopleList = ({ people }) => {
  const birthdays = people.map((person) => {
    return (
      <ListItem button key={person.id}>
        <ListItemAvatar>
          <Avatar src={person.image} />
        </ListItemAvatar>
        <ListItemText
          primary={person.name}
          secondary={person.age + " years old"}
        ></ListItemText>
      </ListItem>
    );
  });

  return <List>{birthdays}</List>;
};

export default PeopleList;
