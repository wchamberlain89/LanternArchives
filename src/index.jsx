//generic
import constants from './constants';

//react
import React from 'react';
import ReactDOM from 'react-dom';

//redux
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';

//react-router
import { HashRouter } from 'react-router-dom';

//components
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

//scss
import AOS from 'aos';
import 'aos/src/sass/aos.scss';

//firebase
import {reactReduxFirebase} from 'react-redux-firebase'
import firebase from 'firebase'
const { firebaseConfig } = constants;

/////////////////////////////
//React-Redux-Firebase setup
/////////////////////////////
firebase.initializeApp(firebaseConfig)

const config = {
  userProfile: 'users',
  enableLogging: false
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)

const store = createStoreWithFirebase(rootReducer)

const render = (Component) => {
  AOS.init();
  AOS.refresh();
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
