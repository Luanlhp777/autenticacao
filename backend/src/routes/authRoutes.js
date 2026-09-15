import { Router } from 'express';

import {
    cadastrar,
    login,
    listarUsuarios,
    me

}
    from '../controllers/authController.js';
import { autenticar } from '../middlewares/authMiddleware.js';


const router = Router()

router.post('/usuarios', cadastrar);
router.post('/login', login);
router.get('/usuarios', autenticar, listarUsuarios);
router.get('/auth/me', autenticar, me);



export default router;