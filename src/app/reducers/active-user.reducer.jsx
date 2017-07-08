const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}