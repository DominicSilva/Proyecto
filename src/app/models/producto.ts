export class Producto{
    _id?: string;
    nombre: string;
    Info: string;
    precio: number;
    
    constructor(nombre: string, Info:string, precio: number){
    this.nombre = nombre;
    this.Info = Info;
    this.precio = precio;
    }
    }