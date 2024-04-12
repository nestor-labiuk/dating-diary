import { logger } from '../loggers/index.loggers.js'
import Book from '../models/Book.js'
import { errorResponse, successResponse } from '../utils/response.utils.js'

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find()
        if (books.length === 0 ) {
            res.status(204)
            logger.warn(errorResponse('List books is empty', []))
            return res.json(errorResponse('List books is empty', []))
        }
        res.status(200)
        logger.info(successResponse('Books found', books))
        res.json(successResponse('Books found', books))        
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const getBookById = async(req, res, next) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if (!book) {
            res.status(404)
            logger.warn(errorResponse('Book not found', []))
            res.json(errorResponse('Book not found', []))
        }
        res.status(200)
        logger.info(successResponse('Book found', book))
        res.json(successResponse('Book found', book))

    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const createBooks = async (req, res, next) => {
    try {
        const { title, author, gender, editorial, salesStock, rentStock } = req.body
        const book = new Book({ title, author, gender, editorial, salesStock, rentStock })
        await book.save()
        res.status(200)
        logger.info('Book created successfully', book)
        res.json(successResponse('Book created successfully', book))
    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const updateBooks = async (req, res, next ) => {
    try {
        const { id } = req.params
        const { title, author, gender, editorial, salesStock, rentStock } = req.body
        const currentBook = await Book.findById(id)
        if (!currentBook) {
            res.status(404)
            logger.warn(errorResponse('Book not found', []))
            res.json(errorResponse('Book not found', []))
        }
        currentBook.title = title || currentBook.title
        currentBook.author = author || currentBook.author
        currentBook.gender = gender || currentBook.gender
        currentBook.editorial = editorial || currentBook.editorial
        currentBook.salesStock = salesStock || currentBook.salesStock
        currentBook.rentStock = rentStock || currentBook.rentStock
        const book = await currentBook.save()
        res.status(200)
        logger.info(successResponse('Book saved successfully', book))
        res.json(successResponse('Book saved successfully', book))

    } catch (err) {
        res.json(err)
        next(err)
    }
}

export const deleteBooks = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndDelete(id)
        if (!book) {
            res.status(404)
            logger.warn(errorResponse('Book not found', []))
            return res.json(errorResponse('Book not found', []))
        }
        res.status(200)
        logger.info(successResponse('Book successfully deleted', book ))
        return res.json(successResponse('Book successfully deleted', book))
    } catch (err) {
        res.json(err)
        next(err)
    }
}
