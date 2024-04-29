import User from '../models/User.js'

export const validateEmail = async ( req, res, next ) => {
    try {
        const { email } = req.body
        const userEmail = await User.findOne({ email })
        if (userEmail) {
            return res.json({ message: 'El email ya está registrado' })
        }
        next()
    } catch (err) {
        res.json({ message: 'Error al validar mail' }) 
    }
}
