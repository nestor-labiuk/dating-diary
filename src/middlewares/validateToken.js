import jwt from 'jsonwebtoken'

export const isValidateToken = (req, res, next) => {
    const accessToken = req.headers.access_token
    if (!accessToken) return res.json({ message: 'Token is required' })
    jwt.verify(accessToken, process.env.SIGNATURE, (err) => {
        if (err) return res.json({ message: 'Invalid signature' })
        next()
    })
}
