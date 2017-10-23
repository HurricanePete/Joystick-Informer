import {createStore} from 'redux';

import {joystickReducer} from './reducers';

export default createStore(joystickReducer)