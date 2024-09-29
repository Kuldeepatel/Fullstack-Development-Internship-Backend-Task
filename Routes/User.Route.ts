import { Router } from 'express';
import { getAllUsers } from '../Controllers/User.controllers';

const router = Router();

// Define routes
router.get('/getallusers', getAllUsers);

export default router;
