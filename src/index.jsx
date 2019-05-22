//generic
import constants from './constants';

//react
import React from 'react';
import ReactDOM from 'react-dom';

//redux
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
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
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
const { firebaseConfig } = constants;

/////////////////////////////
//React-Redux-Firebase setup
/////////////////////////////
firebase.initializeApp(firebaseConfig);

const config = {
  userProfile: 'users',
  enableLogging: false,
  attachAuthIsReady: true
};

const createStoreWithFirebase = compose(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({getFirebase})
  ),
  reactReduxFirebase(firebase, config)
)(createStore);

const store = createStoreWithFirebase(rootReducer);

store.firebaseAuthIsReady.then(() => {

const render = (Component) => {
    AOS.init();
    AOS.refresh();
    ReactDOM.render(
      <AppContainer>
          <Provider store={store}>
            <HashRouter>
              <Component/>
            </HashRouter>
          </Provider>
      </AppContainer>,
      document.getElementById('react-app-root')
    );
  };

render(App);

})

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
