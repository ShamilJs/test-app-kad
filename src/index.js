import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import thunk from 'redux-thunk';

import { rootReducer } from './Stores/rootReducer';

import { App } from './App';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
	<Provider store={store}>
		<AppProvider i18n={enTranslations}>
			<App />
		</AppProvider>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));