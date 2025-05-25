import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [users, setUsers] = useState([]);
  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid pink" }}>
      <div>{user?.name}</div>
      <div>{user?.username}</div>
      <div>{user?.id}</div>
      <div>{user?.email}</div>
    </div>
))}
    </div>
  );

}
export default Home;
