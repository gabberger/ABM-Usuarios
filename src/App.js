import React from 'react';
import UserForm from './components/UserForm';
import User from './components/Users';

import 'bootstrap/dist/css/bootstrap.css';
import UsersJson from './Samples/Users.json';

class App extends React.Component{
  
  state = {
    users: UsersJson
  };

  addUser = (user, pass, email) => {
    console.log("Se generara un usuario");
    const newUser = {
      user: user,
      pass: pass,
      email: email,
      id: this.state.users.length
    }

    this.setState({
      users: [...this.state.users,newUser]
    });
    
  }

  deleteUser = (id) => {
    const newUsers = this.state.users.filter(user => user.id !== id);
    console.log(newUsers)
    this.setState({users: newUsers})
  }

  render(){ 
    return <div>
       <UserForm newuser={this.addUser}/>
      <div className="d-flex d-content-start flex-wrap">
        <User users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
  </div>
  } 
}

export default App;
