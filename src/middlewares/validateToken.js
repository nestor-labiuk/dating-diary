import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const isValidateToken = (req, res, next) => {
    const accessToken = req.headers.access_token
    if (!accessToken) return res.json({ message: 'Token is required' })
    
    jwt.verify(accessToken, process.env.SIGNATURE, (err) => {
        if (err) return res.json({ message: 'Invalid signature' })
        next()
    })
}

// TODO: cambiar permisos,  que cada usuario tenga un solo rol 
export const isSuperAdmin = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('role')
        const userRole = user.role
        const role = userRole.map((role) => role.role )
        const rolePermission = role.find((role) => {return role === 'Super Admin'})
        if (!rolePermission) { 
            return res.json({ message: 'You do not have permission of  Super Admin' })
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
            return res.json({ message: 'You do not have permission of Admin' })
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
