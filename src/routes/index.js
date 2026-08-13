import { Router } from 'express';
import { getHealth, getWelcome } from '../controller/healthController.js';
import { listItems, createItem, getItem } from '../controller/itemsController.js';

const router = Router();

router.get('/', getWelcome);
router.get('/health', getHealth);
router.get('/time', getTime);
router.get('/db/version', getDbVersion);
// Items (simple in-memory resource)
router.get('/items', listItems);
router.post('/items', createItem);
router.get('/items/:id', getItem);

export default router;