import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import BakeryShop from './components/bakeryShop';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BakeryShop username=" Anukul"/>
      </div>
    </Provider>

  );
}

export default App;
