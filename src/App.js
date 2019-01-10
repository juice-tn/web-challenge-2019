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
      favourites: [],
      searchValue: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.applySearch = this.applySearch.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  handleInput(e) {
    this.setState({
      searchValue: e.target.value,
    })
  }

  applySearch() {
    this.setState({
      selectedData: this.filterData(),
    })
  }

  filterData() {
    if (!this.state.searchValue.length) {
      return [];
    }
    return this.state.data.filter((d) => {
      return d.keywords.indexOf(this.state.searchValue) >= 0;
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search handleChange={this.handleInput} applySearch={this.applySearch}/>
        <Selected data={this.state.selectedData} />
        <div className="favourites">
          <h2>Favourites</h2>
          <Selected data={this.state.favourites} />
        </div>
      </div>
    );
  }
}

export default App;
