import React from "react";
import Pagination from "material-ui-flat-pagination";
  
export default class PaginationBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  };
 
  handleClick(offset) {
    this.setState({ offset });
  };
 
  render() {
    return (
        <Pagination
<<<<<<< HEAD
          limit={10}
          offset={this.state.offset}
          total={100}
=======
          
          limit={10}
          offset={this.state.offset}
>>>>>>> home
          onClick={(e, offset) => this.handleClick(offset)}
        />
    );
  };
};