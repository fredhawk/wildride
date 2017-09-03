import React, { Component } from 'react';
import axios from 'axios';
import MeetList from '../components/MeetList';
import Search from './Search';
import './MeetSearch.css';

class MeetSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meets: null,
      searchResult: null,
      totalMatches: 0
    };
  }

  componentDidMount() {
    axios
      .get('/api/meet')
      .then(response => {
        this.setState({
          meets: response.data,
          totalMatches: response.data.length
        });
      })
      .catch(err => console.error(err));
  }
  getMatches(searchterm) {
    const searchValue = new RegExp(searchterm, 'i');
    const matches = this.state.meets.filter(meet => meet.about.match(searchValue) || meet.location.match(searchValue));
    this.setState({
      searchResult: matches,
      totalMatches: matches.length
    });
  }
  render() {
    return (
      <section className="MeetSearch">
        <h1 className="MeetSearch-title">Find Meets</h1>
        <Search getSearch={value => this.getMatches(value)} />
        {!this.state.meets ? `Loading...` : <MeetList meets={!this.state.searchResult ? this.state.meets : this.state.searchResult} />}

        <div className="MeetSearch-matches">
          <span>Found {this.state.totalMatches} matches</span>
        </div>
      </section>
    );
  }
}

export default MeetSearch;
