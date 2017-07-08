const initialState = [
    {
        id: 1,
        first: 'Bucky',
        last: 'Roberts',
        age: 71,
        description: 'Bucky is a React developer and Youtuber',
        thumbnail: 'http://lorempixel.com/400/200/people'
    }, {
        id: 2,
        first: 'Marcus',
        last: 'Hellams',
        age: 44,
        description: 'Marcus is a React developer and Youtuber',
        thumbnail: 'http://lorempixel.com/400/200/people'
    }, {
        id: 3,
        first: 'Maury',
        last: 'Calhoun',
        age: 43,
        description: 'Maury is a Auto Mechanic',
        thumbnail: 'http://lorempixel.com/400/200/people'
    }

];

export default function (state = initialState, action) {
    return state;
}