import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/Pages/Details';
import Navigation from './Components/Navigation/Navigation';
import store from './Redux/configureStore';
import Coins from './Components/Coins';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <div className="App">
          <Routes>
            <Route element={<Coins />} path="/" />
            <Route element={<Details />} path="/details/:id" />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
