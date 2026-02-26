import { useState } from "react";
import UserForm from "../components/UserForm";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import { v4 as uuidv4 } from "uuid";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Add or Update User
  const handleSave = (user) => {
    if (editUser) {
      setUsers(users.map(u => u.id === user.id ? user : u));
      setEditUser(null);
    } else {
      setUsers([...users, { ...user, id: uuidv4() }]);
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSearch = (id) => {
    return users.find(user => user.id === id);
  };

  return (
   <div className="container">
  <h1>User Management System</h1>

  <div className="card">
    <SearchBar onSearch={handleSearch} />
  </div>

  <div className="card">
    <UserForm onSave={handleSave} editUser={editUser} />
  </div>

  <div className="card">
    <UserTable users={users} onEdit={setEditUser} onDelete={handleDelete} />
  </div>
</div>
  );
};

export default UserManagement;