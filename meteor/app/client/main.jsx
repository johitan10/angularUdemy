import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ImageList from './components/image-list.js'

const App = () => {
  return (
      <div>
          React app 2
      </div>
  );
};

Meteor.startup(() => {
  render(<ImageList />, document.getElementById('react-target'));
});
