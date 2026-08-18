import { Router } from 'express';
import {
  getHealth,
  getWelcome,
  getTime,
  getDbVersion,
} from '../controller/healthController.js';
import { listItems, createItem, getItem } from '../controller/itemsController.js';
import {
  getStats,
  listProjects,
  createProject,
  getProject,
} from '../controller/platformController.js';

const router = Router();

router.get('/', getWelcome);
router.get('/health', getHealth);
router.get('/time', getTime);
router.get('/db/version', getDbVersion);
router.get('/stats', getStats);

router.get('/items', listItems);
router.post('/items', createItem);
router.get('/items/:id', getItem);

router.get('/projects', listProjects);
router.post('/projects', createProject);
router.get('/projects/:id', getProject);

export default router;