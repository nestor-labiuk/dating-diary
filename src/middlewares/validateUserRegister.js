import { body } from 'express-validator'
import { validationField } from './common.middlewares.js'

export const validationUserRegister = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido ')
        .isString().withMessage('El nombre debe ser un string')
        .isLength({ min: 3, max: 40 }).withMessage('El nombre debe tener entre 3 y 40 caracteres'),
    body('email')
        .notEmpty().withMessage('El email es requerido')
        .isEmail().withMessage('Formato inválido de email')
        .isString().withMessage('El email debe ser un string')
        .isLength({ min: 3, max: 40 }).withMessage('El email debe tener entre 3 y 40 caracteres'),
    body('password')
        .notEmpty().withMessage('El password no puede estar vacío')
        .isString().withMessage('El password debe ser un string')
        .isLength({ min: 8, max: 18 }).withMessage('El password debe tener entre 8 y 18 caracteres'),
    validationField
]
