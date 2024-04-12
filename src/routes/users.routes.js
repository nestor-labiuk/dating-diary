import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.controllers.js'
import { isSuperAdmin, isUser, isValidateToken } from '../middlewares/validateToken.js'

const router = Router()

router.get('/all/:id', isValidateToken, isSuperAdmin, getAllUsers)
router.get('/:id', isValidateToken, isUser, getUser)
router.post('/', createUser)
router.patch('/:id', isValidateToken, isUser, updateUser)
router.delete('/:id', isValidateToken, isUser, deleteUser)

export default router
