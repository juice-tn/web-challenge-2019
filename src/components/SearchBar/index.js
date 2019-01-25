import React from 'react';
import './styles.css';
import { FormControl, Button, Glyphicon } from 'react-bootstrap';
import Autosuggest from 'react-bootstrap-autosuggest';

class Search extends React.Component {
  render() {
    const handleChange = this.props.handleChange;
    const applySearch = this.props.applySearch;
    const data = this.props.data;
    return (
      <div className="searchContainer"
           onKeyPress={event => {
             if (event.key === "Enter") {
               this.props.applySearch();
             }
           }}>
        <Autosuggest
          showToggle={false}
          type="text"
          placeholder="Search"
          className="searchBar"
          onChange={(e) => handleChange(e)}
          datalist={data.map((d) => {
            return d.title;
          })}
        />
        <Button className="searchButton" type="input" onClick={() => applySearch()}>
          <Glyphicon glyph="search"/>
        </Button>
      </div>
    )
  }
}

export default Search;
