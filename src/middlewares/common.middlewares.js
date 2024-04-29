import { validationResult } from 'express-validator'
import { isValidObjectId } from 'mongoose'

export const validationField = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        return res.json({ message: 'Errores al validar los campos', errores: result.array() })
    }
    next()
}

export const errorCatcher = (err, req, res, next) => {
    res.status(500).json({ message: 'Error de servidor' })
    next()
}

export const isValidId = (req, res, next) => {
    const { id } = req.params
    if (!isValidObjectId(id)) {
        return res.json({ message: 'Invalid id' })
    }
    next()
}
