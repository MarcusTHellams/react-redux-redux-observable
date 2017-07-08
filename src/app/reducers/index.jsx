import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './active-user.reducer';
import ItemsReducer from './items.reducer';

const pingReducer = (state = {
    isPinging: false
}, action) => {
    switch (action.type) {
        case 'PING':
            return {isPinging: true};

        case 'PONG':
            return {isPinging: false};

        default:
            return state;
    }
};

const allReducers = combineReducers({users: UserReducer, activeUser: ActiveUserReducer, pinging: pingReducer, items: ItemsReducer});

export default allReducers;