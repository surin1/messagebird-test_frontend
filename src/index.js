import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store';
import Root from './modules/Pages/Root';
import history from './services/history';

const store = configureStore();

Modal.setAppElement('#app')

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Root />
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render( <App />, document.querySelector( '#app' ) );
