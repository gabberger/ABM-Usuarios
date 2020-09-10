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

  render(){ 
    return <div className="d-flex d-content-start flex-wrap">
      <UserForm newuser={this.addUser}/>
      <User users={this.state.users}/>
    </div>
  } 
}

export default App;
