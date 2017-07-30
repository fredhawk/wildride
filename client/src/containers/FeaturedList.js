import React, { Component } from 'react';
import FeaturedListItem from '../components/FeaturedListItem';

class FeaturedList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Featuredlist">
        <h1 className="Featuredlist-title">Featured jobs</h1>
        <ul>
          {this.props.jobs.map(job => <FeaturedListItem featured={job} key={job.id} />)}
        </ul>
      </div>
    );
  }
}

export default FeaturedList;
