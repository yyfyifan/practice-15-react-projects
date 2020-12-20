import React, {useState} from "react";
import { makeStyles, Paper, Typography, Button } from "@material-ui/core";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";
import data from "./data";

// 样式
const useStyles = makeStyles({
    container: {
        width: 700,
        height: 450,
        margin: "0 auto",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px",
    },
    avatar: {
        position: "relative",
    },
    quoteMark: {
        position: "absolute",
        left: -10,
        top: 0,
        height: 40,
        width: 40,
        color: "orange",
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: "50%",
        objectFit: "cover",
    },
    name: {
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    job: {
        fontSize: "1rem",
        color: "skyblue",
    },
    info: {
        fontSize: "1.5rem",
    },
    control: {
        padding: "20px 0",
    },
});

// helper function
const ensureValidIndex = (index, length) => {
    console.log(index, length);
    return (index + length) % length;
};

const Review = () => {
    const [reviewIndex, setReviewIndex] = useState(0);

    const { name, job, image, text } = data[reviewIndex];

    const prevReview = () => {
        setReviewIndex((index) => ensureValidIndex(index - 1, data.length));
    };

    const nextReview = () => {
        setReviewIndex((index) => ensureValidIndex(index + 1, data.length));
    };
    const randomReview = () => {
        setReviewIndex(Math.floor(Math.random() * data.length));
    };

    const classes = useStyles();
    return (
        <Paper className={classes.container} component="article">
            {/* 头像展示部分。其中将quote图标绝对定位到了左上角 */}
            <div className={classes.avatar}>
                <img src={image} className={classes.image} />
                <BsFillChatQuoteFill className={classes.quoteMark} />
            </div>

            {/* 显示文字信息 */}
            <Typography variant="h4" component="h4" className={classes.name}>
                {name}
            </Typography>
            <Typography variant="h4" component="p" className={classes.job}>
                {job}
            </Typography>
            <Typography variant="h4" component="p" className={classes.info}>
                {text}
            </Typography>
            {/* 左右切换按钮 */}
            <div className={classes.control}>
                <Button onClick={prevReview}>
                    <FaAngleLeft />
                </Button>
                <Button onClick={nextReview}>
                    <FaAngleRight />
                </Button>
            </div>

            <Button variant="outlined" color="secondary" onClick={randomReview}>
                Surprise Me
            </Button>
        </Paper>
    );
};

export default Review;
