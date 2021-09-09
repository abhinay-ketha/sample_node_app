import express from 'express'

// Require the controllers WHICH WE DID NOT CREATE YET!!
import * as userController from '../controllers/user.js'

const router = express.Router();

router.get('/fetchall', userController.fetchAll);

router.get('/:id', userController.fetchById);

router.post('/login', userController.loginHandler);

export default router;