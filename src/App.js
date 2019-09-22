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
