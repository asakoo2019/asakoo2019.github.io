import React, { useState, useEffect, useRef } from 'react';
import SliderIcons from './sliderIcons';
import { makeStyles, withWidth, Grid, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root : {
    flexGrow: 1,
  },
  aboutCompany: {
    [theme.breakpoints.up('sm')]: {
      minWidth: theme.spacing(35),
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: theme.spacing(25),
    },
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: 'rgb(255, 255, 255)',
    cursor: 'pointer',
     transition: '.3s',
    "&:hover": {
        boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
        transition: '.3s',
    }
},
// currentCompany: {
//     marginTop: 6,
//     padding: 15,
//     backgroundColor: 'rgb(255, 255, 255)',
//     cursor: 'pointer',
//     // transition: '.3s',
//     boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
//     "&:hover": {
//         transition: '.3s',
//         boxShadow: '0px 0px 15px 6px rgba(0,0,0,0.5)',
//     }
// },
allCompaniesBtn: {
    margin: 20,
    backgroundColor: '#FE654F',
},
companyLogo: {
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  objectFit: 'cover',
},
aboutCompanyText: {
    textAlign: 'center',
},
topCompaniesTitle: {
    color: '#FE654F',
},
}));

function HomeCompanies ({width, companies}) {
  const classes = useStyles();
  const [companiesData, setCompaniesData] = useState([]);
  const [companySlider, setCompanySlider] = useState(5);
  const history = useHistory();
  let timer = useRef(null);
  let numQuantity = useRef(3);

  switch (width) {
    case 'xs': numQuantity.current = 1; break;
    case 'sm': numQuantity.current = 2; break;
    default: numQuantity.current = 3; break;
  }
  useEffect(() => {
      let a = companySlider;
      const result = [];
      for (let i = 0; i < numQuantity.current; i++) {
        if (a > 5) {
          a = 0;
          result.push(companies[a++]);
        } else {
          result.push(companies[a++]);
        }
      }
      setCompaniesData(result);
      timer.current = setTimeout(() => {
        let b = companySlider;
        setCompanySlider(b < 5 ? b + 1 : 0);
      }, 3000);
      return () => {
        clearTimeout(timer.current)
      }
  }, [companySlider, numQuantity, companies]);

  function setCurrentSlider(slide) {
    clearTimeout(timer.current)
    setCompanySlider(slide)

  }

  const handleClick = () => {
    history.push("/companies");
  };

  const singleCompanyBtn = (id) => {
    history.push(`companies/${id}`);
  };


  const company = companiesData.map((el) => {
    if (el.aboutCompany.length > 50) {
      el.aboutCompany = el.aboutCompany.substring(0, 50) + "...";
    };
    return (
      <Grid container
        className={classes.aboutCompany}
        alignItems="center"
        item xs={9} sm = {5} md = {3} lg = {3} xl = {3}
        key={el.id}
        onClick={() => singleCompanyBtn(el.id)}>
        <Grid container justify='center'>
          <img className={classes.companyLogo} src={el.companyImage} alt={el.companyName}/>
        </Grid>
        <Grid container justify='center'>
          <h6 className={classes.aboutCompanyText}> {el.companyName} </h6>
        </Grid>
        <Grid container justify='center'>
          <p className={classes.aboutCompanyText}> {el.aboutCompany} </p>
        </Grid>
        <Grid container justify='center'>
          <Button className={classes.allCompaniesBtn}
            variant='contained'
            onClick={handleClick}>
            View more
          </Button>
        </Grid>
      </Grid>
    );
  });

  return (
    <>
      {companies.length ?
      <Grid className={classes.root}
        container
        direction='column'
        alignItems='center'>
        <h2 className={classes.topCompaniesTitle}>TOP 6 COMPANIES</h2>
        <Grid container justify={width === 'xs' ? 'center' : 'space-evenly'}>
          {company}
        </Grid>
        <SliderIcons companySlider = {companySlider} setCurrentSlider = {setCurrentSlider}/>
        <Button className={classes.allCompaniesBtn}
          variant='contained'
          onClick={handleClick}>
          All companies
        </Button>
      </Grid> : null}
    </>
  );
};

HomeCompanies.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withWidth()(HomeCompanies)