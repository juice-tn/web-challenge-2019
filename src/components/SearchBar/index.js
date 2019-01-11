import React from 'react';
import './styles.css';
import { FormControl, Button, Glyphicon } from 'react-bootstrap';

class Search extends React.Component {
  render() {
    const handleChange = this.props.handleChange;
    const applySearch = this.props.applySearch;
    return (
      <div className="searchContainer">
        <FormControl
          type="text"
          placeholder="Search"
          className="searchBar"
          onChange={(e) => handleChange(e)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.props.applySearch();
            }
          }}
        />
        <Button className="searchButton" type="input" onClick={() => applySearch()}>
          <Glyphicon glyph="search"/>
        </Button>
      </div>
    )
  }
}

export default Search;
