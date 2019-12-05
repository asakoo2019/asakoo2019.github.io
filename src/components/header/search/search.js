import React from 'react';
import './search.css';

export default class Search extends React.Component {

  constructor () {
    super();
    this.state = {
      term: ''
    };
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
  };

  render () {
    return <input
          className='app-search'
          type='text'
          placeholder="search"
          value={this.state.term}
          onChange={this.onSearchChange} />;
  };
};