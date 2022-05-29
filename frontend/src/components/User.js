import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import userServices from '../services/UserServices'


const User = () => {
    const id = useParams().user_id
    const [user, setUser] = useState(null)
    useEffect(() => {
        userServices.getUser(id).then(user => {
          console.log('user:', user);
          setUser(user);
        }).catch(err => {
          console.log('!!');
          setUser(null);
        })
      }, []
    )

    return (user) ? (
      
      <div>
        <h1>{user.first_name} {user.last_name} </h1>
        <div>{ user.email }</div>
        <img src={ user.avatar } alt="avatar" />
      </div>
    ) : (
      <div>
        Not Found
      </div>
    )
  }
  
  export default User