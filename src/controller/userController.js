import users from '../data/users.js';

let nextUserId = 3;

export const listUsers = (req, res) => {
  res.json({ count: users.length, users: users.map(({ password, ...user }) => user) });
};

export const createUser = (req, res) => {
  const { name, email, password, role } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email, and password are required' });
  }

  const exists = users.some((u) => u.email === email);
  if (exists) {
    return res.status(409).json({ error: 'user already exists' });
  }

  const user = {
    id: nextUserId++,
    name,
    email,
    password,
    role: role || 'user',
  };

  users.push(user);

  const { password: _password, ...safeUser } = user;
  res.status(201).json(safeUser);
};

export const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'user not found' });
  }

  const { name, email, password, role } = req.body || {};
  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  if (role) user.role = role;

  const { password: _password, ...safeUser } = user;
  res.json(safeUser);
};

export const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'user not found' });
  }

  users.splice(index, 1);
  res.json({ message: 'user deleted successfully' });
};
