import React from 'react';
import './companies.css';
import ReactPaginate from 'react-paginate';
import $ from "jquery";

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 5,
      data: [],
      elements: [],
      perPage: 7,
      currentPage: 0,
    };
  };

  setElementsForCurrentPage() {
    let elements = this.state.data
                  .slice(this.state.offset, this.state.offset + this.state.perPage)
                  .map(post => ( <img src={post.thumburl} alt={post.file_name} key={post.id} />));
    this.setState({ elements: elements });
  };

  receiveData() {
    $.ajax({
      url      : 'https://ihsavru.me/Demo/uploads.json',
      dataType : 'json',
      type     : 'GET',
      crossDomain: true,
      success: data => {
        this.setState({
          data: data.course.uploads,
          pageCount: Math.ceil(data.course.uploads.length / this.state.perPage)
        }, () => this.setElementsForCurrentPage());
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  };

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  };

  componentDidMount() {
      this.receiveData();
  };

  render() {
    let paginationElement;
    console.log(this.state.data);
    if (this.state.pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={<span className="gap">...</span>}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageClick}
          forcePage={this.state.currentPage}
          containerClassName={"pagination"}
          previousLinkClassName={"previous_page"}
          nextLinkClassName={"next_page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
      );
    }
    return (
      <div className="App">
        {this.state.elements}
        {paginationElement}
      </div>
    );
  };
};

export default Companies;