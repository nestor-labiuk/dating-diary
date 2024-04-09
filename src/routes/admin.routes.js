import { Router } from 'express'
import { createLevel, createRole, deleteLevel, deleteRole, getAllLevels, getAllRoles, updateLevel, updateRole } from '../controllers/admin.controllers.js'

const router = Router()

router.get('/role', getAllRoles)
router.post('/role', createRole)
router.patch('/role/:id', updateRole)
router.delete('/role/:id', deleteRole)

router.get('/level', getAllLevels)
router.post('/level', createLevel)
router.patch('/level/:id', updateLevel)
router.delete('/level/:id', deleteLevel)

export default router
