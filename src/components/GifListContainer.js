import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs("dolphin"); // Default search query
  }

  fetchGifs = (query) => {
    const apiKey = "ojSBEPjemH26ItUtaks5VJn8XIsUnwqN"; 
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0, 3) 
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
