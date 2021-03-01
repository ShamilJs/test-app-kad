import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { compose, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';

const store = createStore(rootReducer, compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = (
	<Provider store={store}>
		<AppProvider i18n={enTranslations}>
			<App />
		</AppProvider>
	</Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
