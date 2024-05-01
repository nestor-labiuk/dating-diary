import { logger, removedEntitiesLogger } from '../loggers/index.loggers.js'
import Level from '../models/Level.js'
import Role from '../models/Role.js'
import User from '../models/User.js'
import { encryptPassword } from '../utils/encryptPassword.js'
import { successResponse, errorResponse } from '../utils/response.utils.js'

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('level').populate('role')
        if (!user) {
            res.status(404)
            logger.warn(errorResponse('User not found', []))    
            return res.json(errorResponse('User not found', []))
        }
        logger.info(successResponse('User found', user))
        res.json(successResponse('User found', user ))
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const createUser = async (req, res, next ) => {
    try {
        const { name, email, password } = req.body
        const level = await Level.findOne({ level: 'Iron' })
        const role = await Role.findOne({ role: 'User' })
        const user = new User({ name, email, password, level, role })
        user.password = encryptPassword(password)
        await user.save()
        res.status(201)
        logger.info(successResponse('User created', user))
        res.json(successResponse('User created', user))
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, email, password } = req.body
        const currentUser = await User.findById(id)
        if (!currentUser) {
            res.status(404)
            logger.warn(errorResponse('User not found', currentUser)) 
            return res.json(errorResponse('User not found', currentUser))
        }
        // if (password) {
        //     const newPassword = encryptPassword(password)
        //     currentUser.password = newPassword || currentUser.password
        // }
        // currentUser.name = name || currentUser.name
        // currentUser.email = email || currentUser.email
        
        currentUser.name = name ? name : currentUser.name
        currentUser.email = email ? email : currentUser.email
        currentUser.password = password ? encryptPassword(password) : currentUser.password
        
        const user = await currentUser.save()
        res.status(200)
        logger.info(successResponse('User update', user))
        res.json(successResponse('User updated', user))
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            res.status(404)
            logger.warn(errorResponse('User not found', []))
            return res.json(errorResponse('User not found', []))
        }
        res.status(200)
        logger.info(successResponse('User deleted', user))
        removedEntitiesLogger.info(successResponse('User deleted', user))
        res.json(successResponse('User deleted', user))
    } catch (err) {
        res.json(err)
        next(err)
    }
}
