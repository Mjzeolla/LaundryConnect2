const mongoose = require('mongoose')
const { Schema } = mongoose;

const LaundryRoom = new Schema({
    name: String,
    humanname: String,
    washermachines: Number,
    dryermachines: Number,
    washeravailable: Number,
    dryeravailable: Number,
    washeravailable_percent: Number,
    dryeravailable_percent: Number,
    washers: {
        type: [{
            machinenumber: Number,
            status: {
                type: String,
                enum: ['AVAILABLE', 'READY TO START', 'IN USE', 'ALMOST DONE', 'END OF CYCLE', 'OFFLINE'],
                default: 'AVAILABLE'
            },
            rawstatus: String,
            minutes_left: Number
        }]
    },
    dryers: {
        type: [{
            machinenumber: Number,
            status: {
                type: String,
                enum: ['AVAILABLE', 'IN USE', 'ALMOST DONE', 'END OF CYCLE', 'OFFLINE'],
                default: 'AVAILABLE'
            },
            rawstatus: String,
            minutes_left: Number
        }]
    }
})

module.exports = {
    model: mongoose.model('LaundryRoom', LaundryRoom),
    schema: LaundryRoom
}