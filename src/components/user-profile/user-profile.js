import React from 'react';
import './user-profile.css';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Grid, Container } from '@material-ui/core';
import UserImageBlock from './user-image-block';
import UserSummaryModal from './modals/user-summary-modal';
import UserLanguagesModal from './modals/user-languages-modal';
import AboutUserModal from './modals/about-user-modal';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import WcIcon from '@material-ui/icons/Wc';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Languages from './languages';
import UserExperienceModal from './modals/user-experience-modal';
import Experiences from './experiences/experiences';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  userAllBlocks: {
    borderBottom: '1px solid #FE654F',
    marginBottom: 20,
    paddingBottom: 20,
  },
  aboutUserBlock: {
    marginTop: 20,
  },
  userName: {
    marginRight: 15,
  },
  userLine: {
    padding: 8,
    margin: 0,
  },
  aboutUserIcons: {
    color: '#FE654F',
  },
  userProfileLoader: {
    margin: 50,
    color: '#FE654F',
  },
};

const mStP = (state) => ({
  user: state,
});

const UserProfile = (props) => {
  let { classes, user, id, showItems } = props;
  user = user.data ? user.data : {};

  return (
    <Container className='userBlock'>
      {props.user ?
      <>
        {/* About User Block */}
        <Grid container
          className={classNames(classes.aboutUserBlock, classes.userAllBlocks)}
          justify='space-between'
          alignItems='center'
          spacing={2}>
          <Grid container
            item xs={12} sm={4} md={2}>
            {showItems ? <UserImageBlock showItems={showItems} user={user} id={id}/> : <UserImageBlock user={user} id={id}/>}
          </Grid>
          <Grid container
            item xs={12} sm={8} md={10}
            direction='column'>
            <Grid container
              justify='space-around'
              alignItems='center'>
              <Grid container item xs={12} justify='space-between'>
                <Grid>
                  <h5 className={classes.userName}>{user.userName} {user.userSurname}</h5>
                </Grid>
                <Grid>
                  {showItems && <AboutUserModal user={user} id={id}/>}
                </Grid>
              </Grid>
            </Grid>
            <Grid container
              justify='space-around'>
              <Grid container
                item lg={3} md={6} sm={12}
                alignItems='center'>
                <PhoneIcon className={classes.aboutUserIcons}/>
                <p className={classes.userLine}>{user.userPhoneNumber}</p>
              </Grid>
              <Grid container
                item lg={4} md={6} sm={12}
                alignItems='center'>
                <MailIcon className={classes.aboutUserIcons}/>
                <p className={classes.userLine}>{user.email}</p>
              </Grid>
              <Grid container
                item lg={5} sm={12}
                alignItems='center'>
              <LocationOnIcon className={classes.aboutUserIcons}/>
                <p className={classes.userLine}>
                  {`${user.userAdress} ${user.userCity} ${user.userCountry}`}
                </p>
              </Grid>
            </Grid>
            <Grid container
              alignItems='center'>
              <DateRangeIcon className={classes.aboutUserIcons}/>
              <p className={classes.userLine}>
                {user.userBirthDate}
              </p>
              <WcIcon className={classes.aboutUserIcons}/>
              <p className={classes.userLine}>
                {user.userGender}
              </p>
            </Grid>
          </Grid>
        </Grid>
        
        {/* User Summary Block */}
        <Grid container
          className={classNames(classes.userSummaryBlock, classes.userAllBlocks)}
          alignItems='center'
          justify='space-between'>
          <Grid item xs={9} sm={11}>
            <h5>Summary</h5>
            <p>
              {user.aboutUser ? user.aboutUser : 'Add a short professional introduction by highlighting your most valuable skills and experiences in a few sentences.'}
            </p>
          </Grid>
          <Grid container item xs={2} sm={1}
            justify='flex-end'>
            {showItems && <UserSummaryModal user={user} id={id} />}
          </Grid>
        </Grid>

        {/* User Languages Block */}
        <Grid container
          className={classNames(classes.userLanguagesBlock, classes.userAllBlocks)}
          alignItems='center'
          justify='space-between'>
          <Grid item xs={9} sm={11}>
            <h5>Languages</h5>
            {user.userLanguages ? (user.userLanguages.length ? (showItems ? <Languages user={user} id={id} showItems={showItems}/> : <Languages user={user} id={id} />) : 'Add levels of language proficiency.') : null}
          </Grid>
          <Grid container item xs={2} sm={1}
            justify='flex-end'>
            {showItems ? <UserLanguagesModal user={user} id={id} showItems={showItems} /> : <UserLanguagesModal user={user} id={id} />}
          </Grid>
        </Grid>

        {/* User Experience Block */}
        <Grid container
          className={classNames(classes.userWorkExperienceBlock, classes.userAllBlocks)}
          alignItems='center'
          justify='space-between'>
          <Grid item xs={9} sm={11}>
            <h5>Work experience</h5>
            {user.userWorkExperience ? (user.userWorkExperience.length ? (showItems ? <Experiences user={user} showItems={showItems} id={id} /> : <Experiences user={user} id={id} />) : 'Add your work experience and any significant accomplishments.') : null}
          </Grid>
          <Grid container item xs={2} sm={1}
            justify='flex-end'>
            {showItems && <UserExperienceModal user={user} showItems={showItems} id={id} />}
          </Grid>
        </Grid>
      </> : 
      <Grid container justify='center'>
        <CircularProgress size={150} className={classes.userProfileLoader}/>
      </Grid>}
      
    </Container>
  );
};

export default connect(mStP)(withStyles(styles)(UserProfile));