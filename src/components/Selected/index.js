import React from 'react';
import './styles.css';
import _ from 'lodash';
import { Glyphicon } from 'react-bootstrap';

const Selected = ({ data }) => {
  const selected = data || [];
  const row = (d) => {
    return (
      <div className="singleRow">
        <div className="columnLeft">
          <Glyphicon glyph="star"/>
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
      {selected.map((s) => {
        return row(s);
      })}
    </div>
  )
};

export default Selected;
