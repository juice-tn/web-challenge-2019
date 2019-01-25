import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/SearchBar';
import Selected from './components/Selected';
import './App.css';
import data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedData: [],
      searchValue: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.applySearch = this.applySearch.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  // when app is initialized, remove capital letters from JSON data for easier searching
  componentDidMount() {
    this.setState({
      data: this.state.data.map((d) => {
        d.title = d.title.toLowerCase();
        d.keywords = d.keywords.toLowerCase();
        return d;
      })
    })
  }

  handleInput(e) {
    this.setState({
      // get search filter from form input. Remove whitespace from beginning and end of string and make lowercase
      searchValue: e.trim().toLowerCase(),
    })
  }

  // apply search by either pressing Enter or pressing the search button
  applySearch() {
    this.setState({
      selectedData: this.filterData(),
    })
  }

  filterData() {
    // if empty string is provided as filter, return empty list as result
    if (!this.state.searchValue.length) {
      return [];
    }
    return this.state.data.filter((d) => {
      return (d.keywords.indexOf(this.state.searchValue) >= 0 || d.title.indexOf(this.state.searchValue) >= 0);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search handleChange={this.handleInput} applySearch={this.applySearch} data={data}/>
        <Selected data={this.state.selectedData} favourites={this.state.favourites} handleFavourites={this.handleFavourites} />
      </div>
    );
  }
}

export default App;
