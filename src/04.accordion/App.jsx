import { makeStyles, Typography, Paper } from "@material-ui/core";
import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

const useStyles = makeStyles(theme => {
    return {
        container: {
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#c3c3c3"
        },
        questions: {
            minHeight: "50%",
            width: "70%",
            display: "flex",
            padding: "50px"
        }
    };
});

const App = () => {
    const [questions, setQuestions] = useState(data);

    const questionList = questions.map((item) => {
        return <Question id={item.id} {...item} />;
    });

    const classes = useStyles();

    return (
        <main className={classes.container}>
            <Paper component="div" className={classes.questions}>
                <Typography variant="h4" component="h3">
                    问题列表
                </Typography>
                <section>{questionList}</section>
            </Paper>
        </main>
    );
};

export default App;
