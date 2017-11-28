import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';
import {joystickReducer} from './reducers/joystick';
import {authReducer} from './reducers/auth';

const combinedReducer = combineReducers({
	joystick: joystickReducer,
	auth: authReducer,
	form: formReducer
});

export default createStore(combinedReducer, compose(applyMiddleware(thunk), devToolsEnhancer()));