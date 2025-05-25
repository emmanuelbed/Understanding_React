import { use } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Users() {
  const { username } = useParams();

  useEffect(() =>{
    fetch(`https://tiktok.com.api.com/${username}`)
  }, [])

  return <div>{username}</div>;
}
export default Users;
