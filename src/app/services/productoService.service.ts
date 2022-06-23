import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = []


  constructor() {
    const carrito = localStorage.getItem('carrito');
    if(carrito)
    this.productos = JSON.parse(carrito);
  }

  anadirCarrito(producto: Producto) {
    this.productos.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }
  
  eliminarCarrito(index:number) {
    this.productos.splice(index,1);
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

}
