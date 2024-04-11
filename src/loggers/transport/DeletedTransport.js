import Transport from 'winston-transport'
import Deleted from '../../models/Deleted.js'

class DeletedTransport extends Transport {
    constructor(opts) {
        super(opts)
    }
    log(info, callback) {
        setImmediate(async() => {
            const deleted = new Deleted({
                data: {
                    date: info.timestamp,
                    data: info.data,
                    message: info.message
                }
            })
            await deleted.save()
            callback()
        })
    }
}

export default DeletedTransport
