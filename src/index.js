import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/counter'; 
import MarketStore from './stores/market';

const counter = new CounterStore();
const market = new MarketStore();

ReactDOM.render(
    <Provider counter={counter} market={market}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

serviceWorker.unregister();