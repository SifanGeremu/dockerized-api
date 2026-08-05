import { Router } from 'express';
import { getHealth, getWelcome } from '../controller/healthController.js';

const router = Router();

router.get('/', getWelcome);
router.get('/health', getHealth);
router.get('/time', getTime);
router.get('/db/version', getDbVersion);

export default router;