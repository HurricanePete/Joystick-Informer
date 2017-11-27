import {createStore, combineReducers, applyMiddleware} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';
import {joystickReducer} from './reducers';

const combinedReducer = combineReducers({
	joystick: joystickReducer,
	form: formReducer
});

export default createStore(combinedReducer, applyMiddleware(thunk), devToolsEnhancer());