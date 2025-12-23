import { useEffect, useState } from "react";

function Users() {
  // state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch API dilakukan dalam useEffect
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="users-container">
      {users.map((user) => (
        <div key={user.id} className="user-box">
          <h3>{user.name}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <div className="address">
            <h4>Address:</h4>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
            <p>Geo: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>
          </div>
          <div className="company">
            <h4>Company:</h4>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>BS:</strong> {user.company.bs}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;