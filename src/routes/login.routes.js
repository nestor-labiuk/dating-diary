import { Router } from 'express'
import { loginUser } from '../controllers/login.controllers.js'
import { errorCatcher } from '../middlewares/common.middlewares.js'

const router = Router()

router.post('/',
    loginUser,
    errorCatcher
)

export default router
