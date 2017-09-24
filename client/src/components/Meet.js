import axios from 'axios';
import React, { Component } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import './Meet.css';

class Meet extends Component {
  state = {
    meet: null
  };
  componentDidMount() {
    axios
      .get(`/api/meet/${this.props.forRoute.match.params.id}`)
      .then(meet => {
        this.setState({ meet });
      })
      .catch(err => console.error(err));
  }

  attendClick() {
    // make a post request to update with attending
    axios
      .post(`/api/meet/attend/${this.props.forRoute.match.params.id}`)
      .then(meet => {
        this.setState({
          meet
        });
      })
      .catch(err => console.error(err));
  }
  unattendClick() {
    axios
      .post(`/api/meet/unattend/${this.props.forRoute.match.params.id}`)
      .then(meet => {
        this.setState({
          meet
        });
      })
      .catch(err => console.error(err));
  }

  renderContent() {
    const { location, title, description, food, date, attendees } = this.state.meet.data;

    const formatedDate = distanceInWordsToNow(date);
    return (
      <article className="Meet">
        <h2 className="Meet__title">
          Meetup Title <span className="Meet__item--info">{title}</span>
        </h2>
        <div className="Meet__item">
          <h3>Meet is about</h3>
          <p className="Meet__item--info">{description}</p>
        </div>
        <div className="Meet__item">
          <h3>
            Meet is at <span className="Meet__item--info">{location}</span>
          </h3>
        </div>
        <div className="Meet__item">
          <h3>
            Meet is in <span className="Meet__item--info">{formatedDate}</span>
          </h3>
        </div>
        <div className="Meet__item">
          <h3>Food will {food ? 'be served.' : 'not be served.'}</h3>
        </div>
        <div className="Meet__item">
          <h3>
            So far <span className="Meet__item--info">{attendees.length}</span> have signed up.
          </h3>
        </div>
        <div className="Meet__item">
          {attendees.includes(this.props.user._id) ? (
            <button onClick={() => this.unattendClick()} className="Meet__btn Meet__btn--unattend">
              Unattend
            </button>
          ) : (
            <button onClick={() => this.attendClick()} className="Meet__btn Meet__btn--attend">
              Attend
            </button>
          )}
        </div>
      </article>
    );
  }

  render() {
    return <div>{this.state.meet !== null ? this.renderContent() : `Loading...`}</div>;
  }
}

export default Meet;
