import React, { Component } from 'react';
import MeetList from '../components/MeetList';
import Search from './Search';
import './ExploreMeets.css';
import { meets } from '../models/data.json';

class ExploreMeets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
      totalMatches: meets.length
    };
  }

  getMatches(searchterm) {
    const searchValue = new RegExp(searchterm, 'i');
    const matches = meets.filter(met => met.about.match(searchValue) || met.location.match(searchValue));
    this.setState({
      searchResult: matches,
      totalMatches: matches.length
    });
  }
  render() {
    return (
      <section className="ExploreMeets">
        <h1 className="ExploreMeets-title">Explore Jobs</h1>
        <Search getSearch={value => this.getMatches(value)} />
        <MeetList meets={!this.state.searchResult ? meets : this.state.searchResult} />
        <div className="ExploreMeets-matches">
          <span>
            Found {this.state.totalMatches} matches
          </span>
        </div>
      </section>
    );
  }
}

export default ExploreMeets;
