import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function AltaUsuario(){
    return(
        <div className="container">
    <div className="col-md-4 mt-5">
        <div className="card">
           
            <div className="card-header">
                <h1 className="h4 text-info">New User</h1>
            </div>

            <div className="card-body">
                <form>
                    <input className="form-control" placeholder="Insert a new user"></input>
                    <input className="form-control" placeholder="Insert a new password"></input>
               
                    <button className="btn btn-outline-info btn-block form-group">Send</button>
                </form>
            </div>

        </div>
    </div>
</div>
    ) 
    

}

export default AltaUsuario;