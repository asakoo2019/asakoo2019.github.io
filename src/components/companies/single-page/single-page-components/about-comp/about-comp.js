import React from 'react';
import Grid from '@material-ui/core/Grid';
import './about-comp.css';

class AboutCompany extends React.Component {
    render(){
        return(
            <Grid 
                className = 'aboutCompanyDiv'
            >
                <Grid className = 'aboutCompanyContainer'>
                    <div className = "aboutCompany">

                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default AboutCompany;