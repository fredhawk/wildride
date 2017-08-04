import React, { Component } from 'react';

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
      <div className="ExploreJobs-search-group">
        <input type="text" className="ExploreJobs-search__input" value={this.state.value} onChange={e => this.handleChange(e)} />
        <button onClick={() => this.handleSearch()} className="ExploreJobs-search__btn btn">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
