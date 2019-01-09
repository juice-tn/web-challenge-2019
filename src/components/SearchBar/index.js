import React from 'react';
import './styles.css';
import { FormControl, Button, Glyphicon } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.applySearch = this.applySearch.bind(this);
  }

  applySearch() {
  }

  render() {
    return (
      <div className="searchContainer">
        <FormControl
          type="text"
          placeholder="Search"
          className="searchBar"
        />
        <Button onClick={() => this.applySearch}>
          <Glyphicon glyph="search"/>
        </Button>
      </div>
    )
  }
}

export default Search;
