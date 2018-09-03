import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input type='text' onChange={this.handleSearch} value={this.state.searchTerm} placeholder='Search' />
        </header>

        <div>
          {preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />)};
        </div>
      </div>
    );
  }
}

export default Search;