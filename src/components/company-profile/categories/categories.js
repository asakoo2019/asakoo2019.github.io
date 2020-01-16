import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Categories = (props) => {
  const {company} = props;

  const deleteItem = (id) => {
    const index = company.companyCategories.findIndex((el) => el.id === id);
    const newArray = [
      ...company.companyCategories.slice(0, index),
      ...company.companyCategories.slice(index + 1)
    ];
    props.setCompanyCategories(newArray);
  };

  let category;

  if (company.companyCategories){
    category = company.companyCategories.map((item) => {
      return (
        <Grid container
          key={item.id}>
          <Grid item xs={10}>
            <h6>{item.category}</h6>
          </Grid>
          <Grid item xs={1}>
            {props.setCompanyCategories && <Button variant="outlined" color='primary' onClick={() => deleteItem(item.id)}>
              <DeleteIcon color='error'/>
            </Button>}
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <>
      {category}
    </>
  );
};

export default Categories;