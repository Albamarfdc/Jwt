import { Router } from 'express';
import { createNewUser } from '../../src/api/v1/controllers/usersController.js';

import { validateParametersUser } from '../../middlewares/validateParamsUser.js';

const router = Router();

router.post('/users',validateParametersUser ,createNewUser);

export default router;
