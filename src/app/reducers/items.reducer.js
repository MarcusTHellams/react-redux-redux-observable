const INITIAL_STATE = [];

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOADING_ITEMS_SUCCESS':
            return [
                ...state,
                ...action.payload
            ];

        case 'LOADING_ITEMS_ERROR':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
};