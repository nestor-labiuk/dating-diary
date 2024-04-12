import jwt from 'jsonwebtoken'
import User from '../models/User.js'
// import { logger } from '../loggers/index.loggers.js'

export const isValidateToken = (req, res, next) => {
    const accessToken = req.headers.access_token
    if (!accessToken) return res.json({ message: 'Invalid signature' })
    
    jwt.verify(accessToken, process.env.SIGNATURE, (err) => {
        if (err) return res.json({ message: 'Invalid signature' })
        next()
    })
}

export const isSuperAdmin = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('role')
        const userRole = user.role
        const role = userRole.map((role) => role.role )
        const rolePermission = role.find((role) => {return role === 'Super Admin'})
        if (!rolePermission) { 
            return res.json({ message: 'You do not have permission' })
        }
        next()
        
    } catch (error) {
        res.json({ message: 'ERROR' })
    }    
}

export const isAdmin = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('role')
        const userRole = user.role
        const role = userRole.map((role) => role.role )
        const rolePermission = role.find((role) => {return role === 'Admin'})
        if (!rolePermission) { 
            return res.json({ message: 'You do not have permission' })
        }
        next()
        
    } catch (error) {
        res.json({ message: 'ERROR' })
    }    
}

export const isUser = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('role')
        const userRole = user.role
        const role = userRole.map((role) => role.role )
        const rolePermission = role.find((role) => {return role === 'User'})
        if (!rolePermission) { 
            return res.json({ message: 'You do not have permission' })
        }
        next()
        
    } catch (error) {
        res.json({ message: 'ERROR' })
    }    
}
