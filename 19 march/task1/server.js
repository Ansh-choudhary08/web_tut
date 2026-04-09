// server.js
const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5000;

let users = [
  { id: 1, name: "Ansh", email: "ansh@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" }
];

let nextId = 3;

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const newUser = {
    id: nextId++,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body;

  user.name = name || user.name;
  user.email = email || user.email;

  res.json(user);
});


app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.json({ message: "User deleted" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});