export const successResponse = (message, data) => {
    return { message: message, data: data, error: [] }
}

export const errorResponse = (message, error) => {
    return { message: message, data: [], error: error }
}
