import { Router } from 'express'
import { adminCreateLevel, adminCreateRole, adminDeleteLevel, adminDeleteRole, adminGetAllLevels, adminGetAllRoles, adminGetAllUsers, adminGetUserByEmail, adminUpdateLevel, adminUpdateRole, adminUpdateUser, adminUserByRole, adminUsersByLevel } from '../controllers/admin.controllers.js'
import { isValidateToken } from '../middlewares/validateToken.js'
import { isSuperAdmin } from '../middlewares/validateRole.js'
import { errorCatcher, isValidId } from '../middlewares/common.middlewares.js'

const router = Router()

router.get('/all/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminGetAllUsers,
    errorCatcher
)
router.get('/user/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminGetUserByEmail,
    errorCatcher
)
router.patch('/user/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminUpdateUser
)
router.get('/byRole',
    isValidateToken,
    isSuperAdmin,
    adminUserByRole,
    errorCatcher
)
router.get('/byLevel',
    isValidateToken,
    isSuperAdmin,
    adminUsersByLevel,
    errorCatcher
)
router.get('/role',
    isValidateToken,
    isSuperAdmin,
    adminGetAllRoles,
    errorCatcher
)
router.post('/role',
    isValidateToken,
    isSuperAdmin,
    adminCreateRole,
    errorCatcher
)
router.patch('/role/:id',
    isValidateToken,
    isSuperAdmin,
    adminUpdateRole,
    errorCatcher
)
router.delete('/role/:id',
    isValidateToken,
    isSuperAdmin,
    adminDeleteRole,
    errorCatcher
)
router.get('/level',
    isValidateToken,
    isSuperAdmin,
    adminGetAllLevels,
    errorCatcher
)
router.post('/level',
    isValidateToken,
    isSuperAdmin,
    adminCreateLevel,
    errorCatcher
)
router.patch('/level/:id',
    isValidateToken,
    isSuperAdmin,
    adminUpdateLevel,
    errorCatcher
)
router.delete('/level/:id',
    isValidateToken,
    isSuperAdmin,
    adminDeleteLevel,
    errorCatcher
)

export default router
