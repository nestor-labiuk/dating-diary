import { Router } from 'express'
import { createBooks, deleteBooks, getAllBooks, getBookById, updateBooks } from '../controllers/books.controllers.js'

const router = Router()

router.get('/', getAllBooks)
router.get('/:id', getBookById)
router.post('/', createBooks)
router.patch('/:id', updateBooks)
router.delete('/:id', deleteBooks)

export default router
