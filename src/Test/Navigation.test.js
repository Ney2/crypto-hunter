import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import Navigation from '../Components/Navigation/Navigation';

function MockHeader() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

it('Renders correctly', () => {
  const tree = Renderer
    .create(<MockHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
