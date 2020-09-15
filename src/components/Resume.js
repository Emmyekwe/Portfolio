import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content:"''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        }, 
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "tomato tomato transparent transparent"
            }
        }
    },

    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        }, 
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "white",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    About Me
                </Typography>
                <Box component="div">
                    <Box component="div">

                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                        I am Emmanuel Ukhueleigbe, a creative and passionate software developer and UI enthusiast who focuses on building products that solves real problems through enjoyable and meaningful experiences. I specialize in turning functional user interface designs into real life applications. I am also a fast and open minded learner.
                        </Typography>
                        
                    </Box>
                    
                </Box>
                
            </Box>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    My Skills & Technologies
                </Typography>
                    <Box component="div">

                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Angular
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            React JS
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Javascript
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            PHP
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            HMTL5
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            CSS3
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            SASS
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            GIT/GITHUB
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Adobe XD
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "tomato"}}>
                            Figma
                        </Typography>
                        
                    </Box>
            </Box>
        </>
    )
}

export default Resume;
