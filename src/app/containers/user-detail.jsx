import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={this['props'].user.thumbnail} alt=""/>
                <h3>
                    {this['props'].user.first}
                    {this['props'].user.last}
                </h3>
                <h3>{this['props'].user.age}</h3>
                <h3>{this['props'].user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {user: state.activeUser}
}

export default connect(mapStateToProps)(UserDetail);