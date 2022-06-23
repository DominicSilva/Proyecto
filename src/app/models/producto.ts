export class Producto{
    _id?: string;
    nombre: string;
    info: string;
    precio: number;
    imagen: string;
    
    constructor(nombre: string, info:string, precio: number, imagen: string){
    this.nombre = nombre;
    this.info = info;
    this.precio = precio;
    this.imagen = imagen;
    }
    }