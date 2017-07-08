import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, ping} from './../actions';

class UserList extends Component {
    constructor(props) {
        super(props);
    }
    mapUsers() {
        return this['props']
            .users
            .map((user) => {
                return (
                    <li
                        onClick={() => {
                        this['props'].selectUser(user)
                    }}
                        key={user.id}>
                        <a href="javascript:void(0);">{user.first} {user.last}</a>
                    </li>
                );
            });
    }
    render() {
        return (
            <div>
            <p>{`${this['props'].pinging.isPinging}`.toUpperCase()}</p>
            <button onClick={()=>{ this['props'].ping() }}>Ping</button>
            <ul>
                {this.mapUsers()}
            </ul>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users, pinging: state.pinging}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        ping:ping
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);