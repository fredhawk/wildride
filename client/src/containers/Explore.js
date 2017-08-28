import React, { Component } from 'react';
import MeetList from '../components/MeetList';
import Search from './Search';
import './Explore.css';
import { meets } from '../models/data.json';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
      totalMatches: meets.length
    };
  }

  getMatches(searchterm) {
    const searchValue = new RegExp(searchterm, 'i');
    const matches = meets.filter(meet => meet.about.match(searchValue) || meet.location.match(searchValue));
    this.setState({
      searchResult: matches,
      totalMatches: matches.length
    });
  }
  render() {
    return (
      <section className="Explore">
        <h1 className="Explore-title">Explore Meets</h1>
        <Search getSearch={value => this.getMatches(value)} />
        <MeetList meets={!this.state.searchResult ? meets : this.state.searchResult} />
        <div className="Explore-matches">
          <span>
            Found {this.state.totalMatches} matches
          </span>
        </div>
      </section>
    );
  }
}

export default Explore;
