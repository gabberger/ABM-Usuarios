import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class User extends React.Component{

    render(){
        return <div className="col-md-4">
                <div className=" card m-1  d-flex justify-content-start"> 
                    <div className="card-header d-flex justify-content-between">
                            <h4 className="card-text">User</h4>
                            <button className="btn btn-danger" 
                                    onClick={this.props.deleteUser.bind(this,this.props.user.id)}
                            >
                            x   
                            </button>
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