import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러와줍니다.

const counter = new CounterStore();

ReactDOM.render(
    <Provider counter={counter}>
      {/* Provider 에 props 로 넣어줍니다. */}
      <App />
    </Provider>,
    document.getElementById('root')
  );

serviceWorker.unregister();