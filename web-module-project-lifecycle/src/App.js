import React from 'react';
import axios from 'axios';
import Users from './components/Users';

class App extends React.Component {
  state = {
    users: [],
    user: ""
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Jillig3')
    .then(resp=> {
      this.setState({
        ...this.state,
        user: resp.data.login
      })
    })
  }

  handleSearch = (e)=> {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${login}`)
    .then(resp => {
      this.setState({
        ...this.state,
        userpicture: avatar_url
      });
    })
  }

  render() {
    return(<div>
      <h1>Get Your GitHub!</h1>
      <form>
        <input value={this.state.user} onChange={this.handleInput}/>
        <button onClick={this.handleSearch}>Find Yourself!</button>
        <div>
         { this.state.user.length === 0 ? <div>Loading</div>
          : <Users user={this.state.user}/>} 
        </div>
      </form>
    </div>)
  }
}

export default App;
