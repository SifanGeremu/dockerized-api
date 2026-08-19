import users from '../data/users.js';

export const login = (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'invalid credentials' });
  }

  res.json({
    message: 'login successful',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar:user.avatar
    },
  });
};

export const getCurrentUser = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'user not found' });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    avatar:user.avatar
  });
};
