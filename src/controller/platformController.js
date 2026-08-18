const projects = [
  { id: 1, name: 'alpha', status: 'active', owner: 'team-a' },
  { id: 2, name: 'beta', status: 'review', owner: 'team-b' },
];

let nextProjectId = 3;

export const getStats = (req, res) => {
  res.json({
    totalProjects: projects.length,
    activeProjects: projects.filter((p) => p.status === 'active').length,
    uptimeSeconds: Number(process.uptime().toFixed(2)),
    apiStatus: 'healthy',
  });
};

export const listProjects = (req, res) => {
  res.json({ count: projects.length, projects });
};

export const createProject = (req, res) => {
  const { name, status, owner } = req.body || {};
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'name is required' });
  }

  const project = {
    id: nextProjectId++,
    name,
    status: status || 'draft',
    owner: owner || 'unknown',
  };

  projects.push(project);
  res.status(201).json(project);
};

export const getProject = (req, res) => {
  const id = Number(req.params.id);
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return res.status(404).json({ error: 'project not found' });
  }
  res.json(project);
};
