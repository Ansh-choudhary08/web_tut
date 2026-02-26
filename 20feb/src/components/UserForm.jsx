import { useState, useEffect } from "react";

const UserForm = ({ onSave, editUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    designation: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      name: "",
      contact: "",
      email: "",
      designation: "",
      company: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
      <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

      <button type="submit">
        {editUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;