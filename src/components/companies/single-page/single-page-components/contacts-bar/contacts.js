import React from 'react';
import Grid from '@material-ui/core/Grid';
import './contacts.css';

class Contacts extends React.Component {
    render(){
        return(
            <Grid 
                className = 'contactsDiv'
            >
                <Grid className = 'contactsContainer'>
                    <div className = "contacts">

                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default Contacts;