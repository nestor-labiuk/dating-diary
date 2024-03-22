import User from '../models/User.js'

export const getAllUsers = async (req, res, next ) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
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
        res.json(user)
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

        currentUser.name = name || currentUser.name
        currentUser.email = email || currentUser.email
        currentUser.password = password || currentUser.password
        const user = await currentUser.save()
        res.json(user)

    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        res.json(user)
    } catch (err) {
        res.json(err)
        next(err)
    }
}
