export class Producto{
    _id?: string;
    nombre: string;
    info: string;
    precio: number;
    producto: string;
    
    constructor(nombre: string, info:string, precio: number, producto: string){
    this.nombre = nombre;
    this.info = info;
    this.precio = precio;
    this.producto = producto;
    }
    }