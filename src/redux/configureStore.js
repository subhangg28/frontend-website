import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Hotels} from './ddown';
import {Hotel} from './hotel';
import {Device} from './device';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			hotels: Hotels,
			hotel: Hotel,
			device:Device
		}),
	applyMiddleware(thunk, logger)	
		);

	return store;
}

