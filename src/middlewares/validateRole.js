import User from '../models/User.js'

export const isSuperAdmin = async(req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('role')
        const role = user.role.role
        const isRoleAuthorized = (role === 'Super Admin')
        if (!isRoleAuthorized) {
            return res.json({ message: 'Don´t have permission ' })
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
        const role = user.role.role
        const isRoleAuthorized = (role === 'Admin' || role === 'Super Admin')
        if (!isRoleAuthorized) { 
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
        const role = user.role.role
        const isRoleAuthorized = (role === 'Admin' || role === 'Super Admin' || role === 'User')
        if (!isRoleAuthorized) { 
            return res.json({ message: 'You do not have permission' })
        }
        next()
    } catch (error) {
        res.json({ message: 'ERROR' })
    }    
}
