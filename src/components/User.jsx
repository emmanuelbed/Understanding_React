import axios from "axios";

function User({id, name, username, email}) {
  return (
    
        <div style={{ border: "1px solid pink" }}>
          <div>{name}</div>
          <div>{username}</div>
          <div>{id}</div>
          <div>{email}</div>
        </div>
      )
}
export default User;
