import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, ping, getItems} from './../actions';

class UserList extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'props');
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

    mapItems(){
        return this.props.items.map((item)=>{
            return (
                <li key={item.id}>{item.item}</li>
            );
        });
    }
    render() {
        return (
            <div>
            <p>{`${this['props'].pinging.isPinging}`.toUpperCase()}</p>
            <button onClick={()=>{ this['props'].getItems() }}>Ping</button>
            <ul>
                {this.mapUsers()}
            </ul>
            <ul>
                {this.mapItems()}
            </ul>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users, pinging: state.pinging, items: state.items}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        ping:ping,
        getItems: getItems
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);