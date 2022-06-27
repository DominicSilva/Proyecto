const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    console.log(req.body);
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... hubo un error')
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        let productos = await Producto.find();
        res.json(productos);
    } catch (error) {
    console.log(error);
    res.status(500).send('Ups... hubo un error')
    }
}

exports.obtenerproducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Ups... hubo un error")
    }
}

exports.actualizarProducto = async(req, res) => {
    try {
        const {nombre, info, precio, imagen } = req.body

        let producto = await Producto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        producto.nombre = nombre
        producto.precio = precio
        producto.info = info
        producto.imagen = imagen

        let procesoUpdate = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(procesoUpdate)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.borrarProducto = async(req, res) => {
    try {
        let producto= await Producto.findById(req.params.id)
        if (!producto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }

        await Producto.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}