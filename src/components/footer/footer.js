import React from 'react';
import './footer.css';

import { withStyles } from '@material-ui/core/styles';
import {Grid, Container} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const styles = {
  allRightsBlock: {
    backgroundColor: '#383533',
    color: '#fff',
    padding: 8
  },
  socialIcons: {
    fontSize: 30,
    padding: '.5em .5em 0 0'
  },
  footerSocial: {
    color: '#FE654F',
  },
  footerSocialBlock: {
    backgroundColor: '#383532',
    color: '#FEFEFF'
  },
  allRightsFirst: {
    margin: '0 0 .3em 0'
  },
  allRightsSecond: {
    margin: 0
  }
};

const Footer = (props) => {
  const {classes} = props;
  return (
    <footer>
      <Grid container>
        <Grid container
              direction='column'
              alignItems='flex-start'
              className={classes.footerSocialBlock}>
          <Container>
            <a title='Faceboo' className={classes.footerSocial} href='https://www.facebook.com/'>
              <FacebookIcon className={classes.socialIcons}/>
            </a>
            <a title='Mail' className={classes.footerSocial} href="mailto:asakoo2019@gmail.com">
              <MailIcon className={classes.socialIcons}/>
            </a>
            <a title='Instagram' className={classes.footerSocial} href='https://www.instagram.com/'>
              <InstagramIcon className={classes.socialIcons}/>
            </a>
            <a title='Phone' className={classes.footerSocial} href='tel:+37493505479'>
              <PhoneIcon className={classes.socialIcons}/>
            </a>
            <a title='WhatsApp' className={classes.footerSocial} href='whatsapp://send?phone=+37493505479'>
              <WhatsAppIcon className={classes.socialIcons}/>
            </a>
          </Container>
        </Grid>
        <Grid className={classes.allRightsBlock}
              container
              direction='column'
              alignItems='center'>
          <h4 className={classes.allRightsFirst}>© 2019 Asakoo. All rights reserved.</h4>
          <h5 className={classes.allRightsSecond}>Powered by Lav txerq</h5>
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles)(Footer);