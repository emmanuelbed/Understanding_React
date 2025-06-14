import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  async function fetchUserData() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(data);
    
    
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Link to="/">Back to home</Link>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
    </div>
  );
}
export default Users;
