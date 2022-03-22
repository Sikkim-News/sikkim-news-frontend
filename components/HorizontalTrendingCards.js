import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TrendingCard from './TrendingCard';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function HorizontalTrendingCards() {

    return (
        <div style={{ marginTop: "1rem", width: "100%" }}>
            <div style={{ "display": "flex", justifyContent: 'space-between' }}>

                <div style={{
                    "backgroundColor": "black",
                    "color": "white",
                    "padding": "1rem",
                    "width": "fit-content"
                }}>
                    <Typography variant="h5">
                        Trending around Sikkim
                    </Typography>
                </div>
                <view style={{ "display": "flex", flexDirection: "row", justifyContent: "space-between", padding: "1rem" }}>
                    <Typography variant="h6" style={{}}>
                        View More
                    </Typography>
                    <ArrowRightIcon fontSize="large" />
                </view >
            </div>
            <Container>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <TrendingCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TrendingCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TrendingCard />
                </Grid>
            </Grid>

            </Container>
          




        </div>
    )
}

export default HorizontalTrendingCards