import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    try {
        if (!user) {
            res.status(400)
            return res.json({ message: 'Data is incorrect' })
        }
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            res.status(400)
            return res.json({ message: 'Data is incorrect' })
        }
        const payload = { id: user.id }
        const accessToken = jwt.sign(payload, process.env.SIGNATURE, { expiresIn: '24h' })
        const data = {
            _id: user.id,
            name: user.name,
            accessToken: accessToken
        }
        res.json({ 
            message: 'Login successful',
            data
        })   
    } catch (err) {
        res.json(err)
        next(err)
    }
}
