import React from 'react';

import User from './User';

export default class Users extends React.Component{
    
    render(){
       return this.props.users.map(user => <User user={user} 
                                                 deleteUser={this.props.deleteUser}  
                                                 key={user.id}
                                            />
                                    )
    }
}