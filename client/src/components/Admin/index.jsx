import React from 'react';

const User = props => {
  const { name, email, lastname } = props.user.login;
  return (
    <div className="user_container">
      <div className="avatar">
        <img src="/images/avatar.png" alt="avatar" />
      </div>
      <div className="nfo">
        <div>
          <span>Name:</span> {name}
        </div>
        <div>
          <span>Lastname:</span> {lastname}
        </div>
        <div>
          <span>Email:</span> {email}
        </div>
      </div>
    </div>
  );
};

export default User;
