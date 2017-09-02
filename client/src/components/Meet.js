import axios from 'axios';
import React, { Component } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

class Meet extends Component {
  state = {
    meet: null
  };
  componentDidMount() {
    axios.get(`/api/meet/${this.props.match.params.id}`).then(meet => this.setState({ meet }));
    console.log(this.props);
    console.log(this.state);
  }

  renderContent() {
    const { location, about, food, date, attendees } = this.state.meet.data[0];
    const formatedDate = distanceInWordsToNow(date);
    console.log(food);
    return (
      <article className="Meet">
        <div className="Meet__item">
          <h4>Meet is about</h4>
          <p>{about}</p>
        </div>
        <div className="Meet__item">
          <h4>Meet is at:</h4>
          <p>{location}</p>
        </div>
        <div className="Meet__item">
          <h4>Meet is on:</h4>
          <p>{formatedDate}</p>
        </div>
        <div className="Meet__item">
          <h4>Food will {food === 'yes' ? 'be served.' : 'not be served.'}</h4>
          {/* <p>{about}</p> */}
        </div>
        <div className="Meet__item">
          <h4>So far {attendees.length} have signed up</h4>
          {/* <p>{about}</p> */}
        </div>
        <div className="Meet__item">
          <button className="Meet__item--btn">Attend</button>
        </div>
        {/* <p className="Meet__item">{about}</p>
        <p className="Meet__item">{location}</p>
        <p className="Meet__item">{deadline}</p>
        <p className="Meet__item">{food}</p> */}
      </article>
    );
  }

  render() {
    return <div>{this.state.meet !== null ? this.renderContent() : `Loading...`}</div>;
  }
}

export default Meet;
