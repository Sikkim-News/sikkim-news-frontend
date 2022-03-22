
import { makeStyles } from '@mui/styles';
import React from 'react'
import Carousel from './carousel'
import HorizontalTrendingCards from './HorizontalTrendingCards';


const useStyles =  makeStyles((theme)=>{
    return {        
        toolbar: {
            marginTop:'2rem'
        }
    }
})

function Layout({}) {
    const classes = useStyles() ;   
  return (
    <div >

        {/* Carousel */}
            <Carousel style = {{marginTop:"4rem"}} className= {classes.toolbar}/>

        {/* Horizontal Cards */}
            <HorizontalTrendingCards/>

        {/* Veritcal Cards */}


        </div>

  )
}

export default Layout