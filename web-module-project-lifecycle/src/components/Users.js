import React from 'react';
import User from './User';

class Users extends React.Component {
    render() {
        return (
            <>
             {this.props.data.map(data => (<User key={data.id} user={data}/>
            ))}
            </>
        )
    }
}

export default Users;