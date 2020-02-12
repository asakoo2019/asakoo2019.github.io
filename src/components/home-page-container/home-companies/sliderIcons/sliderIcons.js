import React from 'react';
import { makeStyles, Grid, Avatar} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    sliderIconsDiv:{
        margin: theme.spacing(2),
    },
    sliderIcons: {
        backgroundColor: '#fff',
        margin: theme.spacing(1),
        width: theme.spacing(2),
        height: theme.spacing(2),
        "&:hover": {
            backgroundColor: 'blue',
        }
    },
    currentJob: {
        backgroundColor: '#FE654F',
        margin: theme.spacing(1),
        width: theme.spacing(2),
        height: theme.spacing(2),
        "&:hover": {
            backgroundColor: 'blue',
        }
    }
}));

function SliderIcons({companySlider, setCurrentSlider}){
    const classes = useStyles();
    function sliderAvatars (){
        let x = companySlider === 5 ? companySlider -5 : companySlider + 1;
        const arr = [];
        for (let i = 0; i < 6; i++){
            arr.push (<Avatar className = {x === i ? classes.currentJob: classes.sliderIcons} key = {i} onClick = {() => setCurrentSlider(i > 0 ? i - 1: 5)}> </Avatar>);
        }
        return arr;
    }
    
    return (
        <Grid container direction ='row' alignItems = 'center' justify = 'center' className = {classes.sliderIconsDiv}>
            {sliderAvatars()}
        </Grid>
    );
}
export default SliderIcons;