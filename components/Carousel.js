
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slide: {
        minHeight: 500,
        color: '#fff',
        minWidth: '100%',
        overflow: "hidden"
    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

const useStyles = makeStyles({
    topStoriesOfTheDay: {
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        width: "fit-content"
    }
})
function Carousel() {
    const classes = useStyles();
    return (
        <div >
            <SwipeableViews enableMouseEvents>
                <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    <div style={{
                        "backgroundColor": "black",
                        "color": "white",
                        "padding": "1rem",
                        "width": "fit-content"
                    }}>
                        <Typography variant="h5">
                            Top Stories of the day
                        </Typography>
                    </div>
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide2)}>
                    <div className={classes.topStoriesOfTheDay}>
                        <Typography variant="h5">
                            Top Stories of the day
                        </Typography>
                    </div>
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide3)}>
                    <div className={classes.topStoriesOfTheDay}>
                        <Typography variant="h5">
                            Top Stories of the day
                        </Typography>
                    </div>
                </div>
            </SwipeableViews>
        </div>
    )
}

export default Carousel