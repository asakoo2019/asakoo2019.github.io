import React from 'react';
import companyLogo from './2.png';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const styles = {
  aboutCompany: {
    borderRadius: 10,
    marginTop: 6,
    padding: 20,
    background: 'linear-gradient(to right, rgba(244, 67, 54, 0.2), rgba(76, 175, 80, .2))',
    cursor: 'pointer'
  },
  allCompaniesBtn: {
    margin: 20,
    backgroundColor: '#FE654F'
  },
  companyLogo: {
    borderRadius: 10,
    width: '90%'
  },
  aboutCompanyText: {
    textAlign: 'center'
  }
};

const companiesData = [
  { companyName: 'Company1',
    aboutCompany: 'This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
    companyImage: companyLogo,
    viewCount: 2,
    id: 1
  },
  { companyName: 'Company2',
    aboutCompany: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt cupiditate delectus tenetur reiciendis atque necessitatibus nisi odit laboriosam nostrum eum quaerat, voluptatum eius blanditiis consectetur dolore, iusto iste inventore?',
    companyImage: companyLogo,
    viewCount: 8,
    id: 2
  },
  { companyName: 'Company3',
    aboutCompany: 'urish text. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
    companyImage: companyLogo,
    viewCount: 7,
    id: 3
  },
  { companyName: 'Company4',
    aboutCompany: 'vapshe urish text. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description. This is a long description.',
    companyImage: companyLogo,
    viewCount: 10,
    id: 4
  },
];

const HomeCompanies = (props) => {
  const {classes} = props;
  const history = useHistory();
  const newCompaniesData = [...companiesData];
  const handleClick = () => {
    history.push("/companies");
  };
  newCompaniesData.sort((a, b) => {
    return b.viewCount - a.viewCount;
  });

  const company = newCompaniesData.slice(0, 3).map((el) => {
    if (el.aboutCompany.length > 50) {
      el.aboutCompany = el.aboutCompany.substring(0, 50) + "...";
    };
    return (
      <Grid container
        className={classes.aboutCompany}
        alignItems="center"
        item xs={3}
        key={el.id}>
        <Grid justify="center"
          container>
          <img className={classes.companyLogo} src={el.companyImage} alt={el.companyName}/>
        </Grid>
        <Grid>
          <h6 className={classes.aboutCompanyText}> {el.aboutCompany} </h6>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid className={classes.companies}
      container
      direction='column'
      alignItems='center'>
      <h2>Top companies</h2>
      <Grid container
        justify="space-around">
        {company}
      </Grid>
      <Button className={classes.allCompaniesBtn}
        variant='contained'
        onClick={handleClick}>
        All companies
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(HomeCompanies);