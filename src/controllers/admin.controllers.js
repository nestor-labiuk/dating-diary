import { logger } from '../loggers/index.loggers.js'
import Level from '../models/Level.js'
import Role from '../models/Role.js'
import { errorResponse, successResponse } from '../utils/response.utils.js'

export const getAllRoles = async(req, res, next ) => {
    try {
        const userRoles = await Role.find()
        if (userRoles.length === 0) {
            res.status(204)
            logger.warn(errorResponse('List is empty', []))
            return res.json(errorResponse('List is empty', []))
        }
        res.status(200)
        logger.info(successResponse('roles found', userRoles))
        res.json(successResponse('roles found', userRoles))
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const createRole = async(req, res, next) => {
    try {
        const { role, description } = req.body
        const userRole = new Role({ role, description })
        await userRole.save()
        res.status(201)
        logger.info(successResponse('roles created', userRole))
        res.json(successResponse('roles created', userRole))
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const updateRole = async(req, res, next) => {
    try {
        const { id } = req.params
        const { role, description } = req.body
        const currentRoles = await Role.findById(id)
        if (!currentRoles) {
            res.status(404)
            logger.warn(errorResponse('roles not found', currentRoles)) 
            return res.json(errorResponse('roles not found', currentRoles))
        }
        currentRoles.role = role || currentRoles.role
        currentRoles.description = description || currentRoles.description
        const UserRole = await currentRoles.save()
        res.status(200)
        logger.info(successResponse('roles update', UserRole))
        res.json(successResponse('roles updated', UserRole))

    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const deleteRole = async(req, res, next) => {
    try {
        const { id } = req.params
        const userRole = await Role.findByIdAndDelete(id)
        if (!userRole) {
            res.status(404)
            logger.warn(errorResponse('Role not found', []))
            return res.json(errorResponse('Role not found', []))
        }
        res.status(200)
        logger.info(successResponse('Role deleted', userRole))
        res.json(successResponse('Role deleted', userRole))
   
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const getAllLevels = async(req, res, next ) => {
    try {
        const UserLevels = await Level.find()
        if (UserLevels.length === 0) {
            res.status(204)
            logger.warn(errorResponse('List is empty', []))
            return res.json(errorResponse('List is empty', []))
        }
        res.status(200)
        logger.info(successResponse('levels found', UserLevels))
        res.json(successResponse('levels found', UserLevels))
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const createLevel = async(req, res, next) => {
    try {
        const { level, description } = req.body
        const userLevel = new Level({ level, description })
        await level.save()
        res.status(201)
        logger.info(successResponse('level created', userLevel))
        res.json(successResponse('level created', userLevel))
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const updateLevel = async(req, res, next) => {
    try {
        const { id } = req.params
        const { level, description } = req.body
        const currentLevel = await Level.findById(id)
        if (!currentLevel) {
            res.status(404)
            logger.warn(errorResponse('roles not found', currentLevel)) 
            return res.json(errorResponse('roles not found', currentLevel))
        }
        currentLevel.level = level || currentLevel.level
        currentLevel.description = description || currentLevel.description
        const userLevel = await currentLevel.save()
        res.status(200)
        logger.info(successResponse('Level update', userLevel))
        res.json(successResponse('Level updated', userLevel))

    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const deleteLevel = async(req, res, next) => {
    try {
        const { id } = req.params
        const UserLevel = await Level.findByIdAndDelete(id)
        if (!UserLevel) {
            res.status(404)
            logger.warn(errorResponse('Level not found', []))
            return res.json(errorResponse('Level not found', []))
        }
        res.status(200)
        logger.info(successResponse('Level deleted', UserLevel))
        res.json(successResponse('Level deleted', UserLevel))
   
    } catch (err) {
        res.json(err)
        next(err)
    }
}
