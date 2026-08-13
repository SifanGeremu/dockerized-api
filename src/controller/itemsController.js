import items from '../data/items.js';

let nextId = 1;

export const listItems = (req, res) => {
  res.json({ count: items.length, items });
};

export const createItem = (req, res) => {
  const { name, description } = req.body || {};
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'name is required and must be a string' });
  }

  const item = { id: nextId++, name, description: description || '' };
  items.push(item);
  res.status(201).json(item);
};

export const getItem = (req, res) => {
  const id = Number(req.params.id);
  const item = items.find((i) => i.id === id);
  if (!item) return res.status(404).json({ error: 'item not found' });
  res.json(item);
};
