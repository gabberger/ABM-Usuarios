import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class User extends React.Component{

    render(){
        return <div className="mt-2 col-md-3 container"> 
               <div className="card">
                <div className="card-header">
                        <h4 className="card-text">User</h4>
                </div>
                <div className="card-body">
                        <p className="form-control">Id: {this.props.user.id}</p>
                        <p className="form-control">User: {this.props.user.user}</p>
                        <p className="form-control">e-mail: {this.props.user.email}</p>
                </div>
               </div>
        </div>
    }
}