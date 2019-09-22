import React from 'react';
import Table from './component/table/Table';
import superagent from 'superagent';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './component/user/AddUser.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {

    superagent.get('/api/users')
      .then(res => {
        this.setState({ users: res.body })
      });

  }

  getUsers() {
    superagent.get('/api/users')
      .then(res => {
        this.setState({ users: res.body })
      });
  }

  // editUser(userId) {
  //   superagent.get('http://localhost:8080/api/users/' + userId)
  //     .then(res => {
  //       const newUsers = this.state.users;
  //       newUsers.forEach(function (user) {
  //         if (user.id === userId) {
  //           user = res.body;
  //           console.log(user);
  //         }
  //       });
  //       this.setState({
  //         users: newUsers
  //       })
  //     });
  // };

 

  render() {
    return (
      <div className="App container" >
        <Table users={this.state.users} getUsers={this.getUsers.bind(this)} />
        <AddUser users={this.state.users} getUsers={this.getUsers.bind(this)} />

      </div>
    );
  };

}

export default App;
