import React from "react";
import Pagination from "material-ui-flat-pagination";
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
=======

>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
export default class PaginationBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
<<<<<<< HEAD
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
=======
  }
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
 
  handleClick(offset) {
    this.setState({ offset });
  }
 
  render() {
    return (
<<<<<<< HEAD
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
=======
      <Pagination
        nextPageLabel='next'
        previousPageLabel='previous'
        limit={10}
        offset={this.state.offset}
        total={100}
        onClick={(e, offset) => this.handleClick(offset)}
      />
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
    );
  };
};