import React, { useState, useEffect } from "react";

function Task2() {
  const [users, setUsers] = useState([]); // To store fetched user data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To store any error message

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);

        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mb-2 text-2xl font-bold">
        Fetching UserData from API
      </h1>
      <div>
        <div>
          <h1 className="text-xl font-bold">Name of Users</h1>
        </div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task2;
