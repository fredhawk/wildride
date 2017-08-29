import React, { Component } from 'react';
import axios from 'axios';
import MeetList from '../components/MeetList';
import Search from './Search';
import './FindMeet.css';

class FindMeet extends Component {
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
      .get('http://localhost:3030/meets')
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
      <section className="FindMeet">
        <h1 className="FindMeet-title">Find Meets</h1>
        <Search getSearch={value => this.getMatches(value)} />
        {!this.state.meets ? `Loading...` : <MeetList meets={!this.state.searchResult ? this.state.meets : this.state.searchResult} />}

        <div className="FindMeet-matches">
          <span>
            Found {this.state.totalMatches} matches
          </span>
        </div>
      </section>
    );
  }
}

export default FindMeet;
