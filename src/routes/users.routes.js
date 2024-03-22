import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.controllers.js'

const router = Router()

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
