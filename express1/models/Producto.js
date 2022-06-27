const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    info: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    producto: {
        type: String,
        require: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('Producto', ProductoSchema)