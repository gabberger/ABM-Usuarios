import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class AltaUsuario extends React.Component{
    
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



export default AltaUsuario;