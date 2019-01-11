import React from 'react';
import './styles.css';
import _ from 'lodash';
import { Glyphicon } from 'react-bootstrap';

class Selected extends React.Component {
  constructor(props) {
    super(props);
    // use local storage to persist state of favourites + rehydrate react state
    this.state = JSON.parse(localStorage.getItem('favouriteWastes')) || { favourites: [] };
    this.toggleStarColor = this.toggleStarColor.bind(this);
    this.handleFavourites = this.handleFavourites.bind(this);
    this.saveInLocalStorage = this.saveInLocalStorage.bind(this);
  }

  saveInLocalStorage() {
    // set state in local storage to persist state
    localStorage.setItem('favouriteWastes', JSON.stringify(this.state));
  }

  toggleStarColor(color, title) {
    let state = {};
    state[title] = color;
    // use callback function in setState to save state in local storage
    this.setState(state, this.saveInLocalStorage);
  }

  // add favourited row to favourites list in state and toggle star color
  handleFavourites(row) {
    let favourites = this.state.favourites;

    let alreadyFavourited = false;
    this.state.favourites.forEach((f) => {
      if (f.title === row.title) {
        alreadyFavourited = true;
      }
    });

    // if already favourited, delete row from favourites list, otherwise add row to favourites list
    if (!alreadyFavourited) {
      favourites.push(row);
      this.toggleStarColor('green', row.title);
    } else {
      favourites = this.state.favourites.filter((f) => {
        return f.title !== row.title;
      });
      this.toggleStarColor('lightgrey', row.title);
    }

    // use callback function in setState to save state in local storage
    this.setState({
      favourites,
    }, this.saveInLocalStorage);
  }

  render() {
    const { data } = this.props;
    const selected = data || [];
    // this is styling to offset the search content when the favourites list is introduced (to prevent overlap)
    const offset = this.state.favourites.length > 1 ? { marginBottom: '30vh' } : { marginBottom: '10px' };

    const row = (d, alwaysGreen) => {
      return (
        <div className="singleRow">
          <div className="columnLeft">
            {alwaysGreen ?
              <Glyphicon glyph="star" style={{ color: 'green' }} onClick={() => this.handleFavourites(d)}/> :
              <Glyphicon glyph="star" style={{ color: this.state[d.title] || 'lightgrey' }} onClick={() => this.handleFavourites(d)}/>}
            {d.title}
          </div>
          <div className="columnRight">
            <div dangerouslySetInnerHTML={{ __html: _.unescape(d.body) }} />
          </div>
        </div>
      )
    };

    return (
      <div>
        <div style={offset}>
          {selected.map((s) => {
            return row(s);
          })}
        </div>
        {this.state.favourites.length > 1 ?
          <div className="favourites">
            <h2>Favourites</h2>
            {this.state.favourites.map((s) => {
              return row(s, true);
            })}
        </div> : <div></div>}
      </div>
    )
  }
}

export default Selected;
