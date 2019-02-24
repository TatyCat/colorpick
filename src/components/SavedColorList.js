import React, { Component } from 'react';
import Main from './components/Main'

class SavedColorList extends Component {
  render() {
    return (
      <ul>
        <li>
          <Main
            {savedColors}
          />
        </li>
      </ul>
    );
  }
}

export default SavedColorList;