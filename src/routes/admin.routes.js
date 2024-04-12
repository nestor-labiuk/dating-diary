import { Router } from 'express'
import { adminCreateLevel, adminCreateRole, adminDeleteLevel, adminDeleteRole, adminGetAllLevels, adminGetAllRoles, adminUpdateLevel, adminUpdateRole, adminUpdateUser } from '../controllers/admin.controllers.js'
import { isSuperAdmin, isValidateToken } from '../middlewares/validateToken.js'

const router = Router()

router.patch('/user/:id', isValidateToken, isSuperAdmin, adminUpdateUser)

router.get('/role', isValidateToken, isSuperAdmin, adminGetAllRoles)
router.post('/role', isValidateToken, isSuperAdmin, adminCreateRole)
router.patch('/role/:id', isValidateToken, isSuperAdmin, adminUpdateRole)
router.delete('/role/:id', isValidateToken, isSuperAdmin, adminDeleteRole)

router.get('/level', isValidateToken, isSuperAdmin, adminGetAllLevels)
router.post('/level', isValidateToken, isSuperAdmin, adminCreateLevel)
router.patch('/level/:id', isValidateToken, isSuperAdmin, adminUpdateLevel)
router.delete('/level/:id', isValidateToken, isSuperAdmin, adminDeleteLevel)

export default router
