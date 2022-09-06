import './App.css';
import { Provider } from 'react-redux';
import Coins from './Components/Coins';
import store from './Redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Coins />
      </div>
    </Provider>
  );
}

export default App;
