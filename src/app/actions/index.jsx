import 'redux-observable';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/delay';

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