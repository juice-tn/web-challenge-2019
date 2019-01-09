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
    };
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Selected data={[this.state.data[0]]} />
        <div className="favourites">
          <h2>Favourites</h2>
          <Selected data={this.state.favourites} />
        </div>
      </div>
    );
  }
}

export default App;
