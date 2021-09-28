import React, { Component } from 'react';


class User extends Component {
 componentDidMount() {
     const { user } = this.props;
     console.log(`User ${user.login}`);
 }

 render() {
    return(
        <div key={data.id}>
            <img src={data.avatar_url} alt={data.login}/>
            <div>
                <h3>{data.login}</h3>
                {data.login &&
                data.login.map(e => <p key={e.num}>{e.login}</p>)}
            </div>
        </div>
    )
 }

}

export default User;