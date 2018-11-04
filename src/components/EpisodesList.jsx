import React, { Component } from 'react';
import map from 'lodash.map';

class EpisodesList extends Component {
  state = {
    episodes: {}
  }
  render() {
    return (
      <div>
        {map(this.props.episodes, (episode, i) => {
          return <div key={i}>
            <img onClick={() => this.props.selectEpisode(episode, i)} src={episode.image_url} alt="episode"/>
            <h3>{episode.title}</h3>
          </div>
        })}
      </div>
    );
  }
}

export default EpisodesList;