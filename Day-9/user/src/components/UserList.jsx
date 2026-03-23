

import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";

function UserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
      setLoading(false);
    };

    fetchUsers();

  }, []);

  if (loading) return <Loader />;

  return (
    <div className="grid gap-6 p-6
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3">

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

    </div>
  );
}

export default UserList;