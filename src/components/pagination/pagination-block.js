import React from "react";
import Pagination from "material-ui-flat-pagination";
<<<<<<< HEAD

=======
  
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
export default class PaginationBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
<<<<<<< HEAD
  }
 
  handleClick(offset) {
    this.setState({ offset });
  }
 
  render() {
    return (
      <Pagination
        nextPageLabel='next'
        previousPageLabel='previous'
        limit={10}
        offset={this.state.offset}
        total={100}
        onClick={(e, offset) => this.handleClick(offset)}
      />
=======
  };
 
  handleClick(offset) {
    this.setState({ offset });
  };
 
  render() {
    return (
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
    );
  };
};