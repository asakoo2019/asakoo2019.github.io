import React from "react";
import Pagination from "material-ui-flat-pagination";
  
export default class PaginationPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  };
 
  handleClick(offset) {
    this.setState({ offset });
  };
 
  render() {
      const {companies} = this.props;
      //console.log(companies)
    return (
        <div>
            {companies}
            <Pagination
                limit={10}
                offset={this.state.offset}
                total={companies.length}
                onClick={(e, offset) => this.handleClick(offset)}
                //component = {}
                />
        </div>
        
    );
  };
};