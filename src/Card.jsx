import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(({avatar,first_name,email,id,user,last_name}) =>
                      <div className="project column3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={avatar} alt={avatar} className="avatar"></img>
                          <h1 className="name">{first_name} {last_name}</h1>
                          <p className="email">{email}</p>
                          <p>User ID: {id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;