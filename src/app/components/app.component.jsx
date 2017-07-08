import React from 'react';
import './../scss/styles.scss';
import UserList from './../containers/user-list';
import Userdetail from './../containers/user-detail';
const App = () => {
    return (
        <div className="app">
            <h2>Username List:</h2>
            <UserList/>
            <hr/>
            <h2>User Details:</h2>
            <Userdetail />
        </div>
    )
};

export default App;
