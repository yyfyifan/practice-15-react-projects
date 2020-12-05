import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import data from "./data";
import PeopleList from "./PeopleList";
import { Typography } from "@material-ui/core";

const containerStyle = {
  margin: "200px auto",
  width: "50%",
};

const flexRightStyle = {
  display: "flex",
  justifyContent: "flex-end",
};

const BirthdayList = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div style={containerStyle}>
      <Typography align='center'>一共有 {people.length} 人</Typography>
      <PeopleList people={people} />
      <div style={flexRightStyle}>
        <Button variant='contained' color='primary' onClick={clearAll}>
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default BirthdayList;
