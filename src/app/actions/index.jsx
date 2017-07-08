import 'redux-observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/fromPromise';
import Rx from 'rxjs';
import axios from 'axios';

console.log(Rx);

export const selectUser = (user) => {
    console.log('You clicked on user:' + user.first);
    return {type: 'USER_SELECTED', payload: user}
};

export const ping = () => {
    return {type: 'PING'}
}

export const pingEpic = (action$) => {
    return action$
        .ofType('PING')
        .delay(2000)
        .mapTo({type: 'PONG'});

}

export const getItems = () => {
    return {type: 'LOADING_ITEMS'};
}

export const itemsEpic = (action$) => {
    return action$
        .ofType('LOADING_ITEMS')
        .switchMap(() => {
            return Rx
                .Observable
                .fromPromise(axios.get('http://localhost:3000/ap2'));
        })
        .map((resp) => {
            return {type: 'LOADING_ITEMS_SUCCESS', payload: resp.data}
        })
        .catch((err) => {
            return Rx
                .Observable
                .of({type: 'LOADING_ITEMS_ERROR', payload: err});
        })

}
