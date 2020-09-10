import React from 'react';
import UserForm from './components/UserForm';
import User from './components/Users';

import 'bootstrap/dist/css/bootstrap.css';
import UsersJson from './Samples/Users.json';

class App extends React.Component{
  
  state = {
    users: UsersJson
  }

  render(){

    return <div className="d-flex d-content-start flex-wrap">
      <UserForm/>
      <User users={this.state.users}/>
    </div>
  }
}

export default App;
