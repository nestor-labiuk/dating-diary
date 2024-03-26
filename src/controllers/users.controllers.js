import User from '../models/User.js'

export const getAllUsers = async (req, res, next ) => {
    try {
        const users = await User.find()
        if (!users) {
            return res.status(204).json({ message: 'List is empty' })
        }
        res.status(200).json({ message: 'You got the list of users', users })
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.json(user)
    
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const createUser = async (req, res, next ) => {
    try {
        const { name, email, password } = req.body
        const user = new User({ name, email, password })
        await user.save()
        res.status(201).json({ message: 'The user was created', user })
    
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
            return res.json({ message: 'User not found', currentUser })
        }
        currentUser.name = name || currentUser.name
        currentUser.email = email || currentUser.email
        currentUser.password = password || currentUser.password
        const user = await currentUser.save()
        res.status(200).json({ message: 'The user was updated', user })

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
            return res.json({ message: 'User not found', user })
        }
        res.status(200).json({ message: 'The user was deleted', user })
   
    } catch (err) {
        res.json(err)
        next(err)
    }
}
