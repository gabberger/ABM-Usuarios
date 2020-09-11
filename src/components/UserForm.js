import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class UserForm extends React.Component{
    
    onSubmit = (event) => {
        event.preventDefault(); 
        alert("Se dara de alta un nuevo usuario");
        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;
        let email = document.getElementById("email").value;
        this.props.newuser(user,pass,email)
        document.getElementById("user").value = '';
        document.getElementById("pass").value = '';
        document.getElementById("email").value = '';

    }
    
    render(){
        
        return <div id="contenedor" className="container">
        <div className="col-md-4 mt-5 mb-3">
            <div className="card">
               
                <div className="card-header">
                    <h1 className="h4 text-info">New User</h1>
                </div>
    
                <div className="card-body">
                    <form 
                        id="newUser"
                        onSubmit={this.onSubmit}
                    >
                        <div className="form-group">
                            <input
                                className="form-control" 
                                id="user" 
                                placeholder="Insert a new user"
                            >    
                            </input>
                            
                            <input
                                className="form-control" 
                                id="pass" 
                                placeholder="Insert a new password"
                            >
                            </input>
                            <input
                                className="form-control" 
                                id="email" 
                                placeholder="Insert a new email"
                            >
                            </input>
                        </div>     
                        <input 
                            id="send"
                            type="submit"
                            value="Send"
                            className="btn btn-outline-info btn-block"
                        >
                        </input>
                    </form>
                </div>
    
            </div>
        
        </div>
    </div>
    };
}



export default UserForm;