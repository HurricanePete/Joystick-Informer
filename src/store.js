import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';
import {joystickReducer} from './reducers/joystick';
import {authReducer} from './reducers/auth';

import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const combinedReducer = combineReducers({
	joystick: joystickReducer,
	auth: authReducer,
	form: formReducer
});

const store = createStore(combinedReducer, compose(applyMiddleware(thunk), devToolsEnhancer()));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}


export default store;