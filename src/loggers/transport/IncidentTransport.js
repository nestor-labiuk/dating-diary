import Transport from 'winston-transport'
import Incident from '../../models/Incident.js'

class IncidentTransport extends Transport {
    constructor(opts) {
        super(opts)
    }
    log(info, callback) {
        if (info.level === 'error') {
            setImmediate(async() => {
                const incident = new Incident({
                    message: {
                        date: info.timestamp,
                        error: info.error
                    }
                })
                await incident.save()
                callback()
            })
        }
    }
}

export default IncidentTransport
