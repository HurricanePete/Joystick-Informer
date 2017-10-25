import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

import {reducer as formReducer} from 'redux-form';
import {joystickReducer} from './reducers';

const combinedReducer = combineReducers({
	joystick: joystickReducer,
	form: formReducer
});

export default createStore(combinedReducer, devToolsEnhancer());