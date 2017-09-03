import axios from 'axios';
import React, { Component } from 'react';

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
    const { location, about, deadline, food } = this.state.meet.data[0];
    return (
      <article className="Meet">
        <p className="Meet__item">{about}</p>
        <p className="Meet__item">{location}</p>
        <p className="Meet__item">{deadline}</p>
        <p className="Meet__item">{food}</p>
      </article>
    );
  }

  render() {
    return <div>{this.state.meet !== null ? this.renderContent() : `Loading...`}</div>;
  }
}

export default Meet;
