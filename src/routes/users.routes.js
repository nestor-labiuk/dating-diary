import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/users.controllers.js'
import { isSuperAdmin, isUser, isValidateToken } from '../middlewares/validateToken.js'
import { errorCatcher, isValidId, validationField } from '../middlewares/common.middlewares.js'
import { validateEmail } from '../utils/validateEmail.utils.js'
import { validationUserRegister } from '../middlewares/validateUserRegister.js'

const router = Router()

router.get('/all/:id',
    isValidateToken,
    isValidId,
    isSuperAdmin,
    getAllUsers,
    errorCatcher
)

router.get('/:id',
    isValidateToken,
    isValidId,
    isUser,
    getUser,
    errorCatcher
)

router.post('/',
    validationUserRegister,
    validationField,
    validateEmail,
    createUser,
    errorCatcher
)

router.patch('/:id',
    isValidateToken,
    isValidId,
    isUser,
    updateUser,
    errorCatcher
)

router.delete('/:id',
    isValidateToken,
    isValidId,
    isUser,
    deleteUser,
    errorCatcher
)

export default router
