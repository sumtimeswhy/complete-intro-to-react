import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

//<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
const Search = () => (
  <div className='search'>
    <div>
      {preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />)};
    </div>
  </div>
);

export default Search;