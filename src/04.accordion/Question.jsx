import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const useStyles = makeStyles({
    container: {
        padding: 5,
        width: 700,
        margin: 20
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
    },
});

const Question = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <header className={classes.header}>
                <Typography>{title}</Typography>
                <Button variant="contained" onClick={() => setShowInfo(show => !show)}>
                    {/* 根据showInfo的状态来调整显示的button */}
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus/> }
                    
                </Button>
            </header>
            {showInfo && <p>{info}</p>}
        </Paper>
    );
};

export default Question;
