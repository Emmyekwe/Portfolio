import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../img/1.png";
import project2 from "../img/3.png";
import project3 from "../img/4.png";
import project4 from "../img/5.png";



const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
})



const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer} >
            <Navbar />
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 1" height="200" image={project1} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Portfolio Website
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is my Portfolio site created with React JS and CSS3.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            https://eager-saha-668b79.netlify.app/
                            </Button>
                            
                        </CardActions>
                    
                </Card>
            </Grid>

                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="200" image={project2} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                               Lavish
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lavish is a WiFi service provider website created with React JS and CSS3. 
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            https://emmyekwe.github.io/Zeet/
                            </Button>
                        </CardActions>
                    
                </Card>
            </Grid>

            {/* Project 3 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 3" height="200" image={project3} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Soundwave
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Soundwave is a website for streaming songs. This is a design made with Figma.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                   
                </Card>
            </Grid>

            {/* Project 4 */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 4" height="200" image={project4} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Lekki Gym
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is a mobile app design for Lekki Gym designed with Adobe XD.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        
                    
                </Card>
            </Grid>


            </Grid>
        </Box>
    )
}

export default Portfolio;
