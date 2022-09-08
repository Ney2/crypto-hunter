import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Home from '../Components/Pages/Home';

test('renders correctly', () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
