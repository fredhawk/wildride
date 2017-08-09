import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSearch() {
    this.props.getSearch(this.state.value);
  }
  render() {
    return (
      <div className="Search">
        <input type="text" className="Search__input" value={this.state.value} onChange={e => this.handleChange(e)} />
        <button onClick={() => this.handleSearch()} className="Search__btn btn">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
