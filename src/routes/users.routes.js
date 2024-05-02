import { Router } from 'express'
import { createUser, deleteUser, getUserById, updateUser } from '../controllers/users.controllers.js'
import { isValidateToken } from '../middlewares/validateToken.js'
import { errorCatcher, isValidId, validationField } from '../middlewares/common.middlewares.js'
import { validationUserRegister } from '../middlewares/validateUserRegister.js'
import { isUser } from '../middlewares/validateRole.js'
import { validateEmail } from '../middlewares/validateEmail.js'

const router = Router()

router.get('/:id',
    isValidateToken,
    isValidId,
    isUser,
    getUserById,
    errorCatcher
)
router.post('/',
    validationUserRegister,
    validationField,
    
    createUser,
    errorCatcher
)
// TODO: agregar validaciones de campos al updatear usuario
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
