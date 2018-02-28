import React from 'react';
import ReactDOM from 'react-dom';
import Bilboteca from './bilboteca';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bilboteca />, div);
  ReactDOM.unmountComponentAtNode(div);
});
