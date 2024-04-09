import bcrypt from 'bcrypt'

export const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(password, salt)
    return hash
}
