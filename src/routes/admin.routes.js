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
// TODO: agregar validaciones de campos al updatear usuario
router.patch('/user/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminUpdateUser
)
router.get('/byRole/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminUserByRole,
    errorCatcher
)
router.get('/byLevel/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminUsersByLevel,
    errorCatcher
)
router.get('/role/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminGetAllRoles,
    errorCatcher
)
router.post('/role/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminCreateRole,
    errorCatcher
)
router.patch('/role/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminUpdateRole,
    errorCatcher
)
router.delete('/role/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminDeleteRole,
    errorCatcher
)
router.get('/level/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminGetAllLevels,
    errorCatcher
)
router.post('/level:/',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminCreateLevel,
    errorCatcher
)
router.patch('/level/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminUpdateLevel,
    errorCatcher
)
router.delete('/level/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    adminDeleteLevel,
    errorCatcher
)

export default router
