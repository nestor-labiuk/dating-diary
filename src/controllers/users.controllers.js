import { logger, removedEntitiesLogger } from '../loggers/index.loggers.js'
import Level from '../models/Level.js'
import Role from '../models/Role.js'
import User from '../models/User.js'
import { encryptPassword } from '../utils/encryptPassword.utils.js'
import { successResponse, errorResponse } from '../utils/response.utils.js'

export const getAllUsers = async (req, res, next ) => {
    try {
        const users = await User.find().populate('level').populate('role')
        if (users.length === 0) {
            res.status(204)
            logger.warn(errorResponse('List is empty', []))
            return res.json(errorResponse('List is empty', []))
        }
        res.status(200)
        logger.info(successResponse('Users found', users))
        res.json(successResponse('Users found', users))
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

// TODO: buscar usuarios por role
export const getAllUserByRole = async (req, res, next) => {
    const role = 'Admin'
    try {
        const users = await User.find().populate('level')
        // const miRole = users.find({ role: role })
        res.json(users)
        
    } catch (err) {
        res.json(err)
        next(err)
    }
}

// TODO: buscar usuarios por level
export const getAllUsersByLevel = async (req, res, next) => {
    try {
        const users = await User.find().populate('level')
        res.json(users)

    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('level').populate('role')
        if (!user) {
            res.status(404)
            logger.warn(errorResponse('User not found', []))    
            return res.json(errorResponse('User not found', []))
        }

        // const role = user.role
        // console.log('***', role)
        // const userRole = role.find( item => item.role === 'User')
        // console.log(userRole.role)
        const role = user.role
        const userRole = role.map(item => item.role)
        const roleAdmin = role.filter(item => item.role === 'Admin')

        logger.info(successResponse('User found', user))
        res.json(successResponse('User found', [user.level.level, userRole, roleAdmin] ))
    
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
        currentUser.name = name || currentUser.name
        currentUser.email = email || currentUser.email
        currentUser.password = encryptPassword(password) || currentUser.password
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
