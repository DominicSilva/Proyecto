import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {

    productos: Producto[] = []

    url = 'http://localhost:4000/api'

    constructor(private http: HttpClient) {
        const carrito = localStorage.getItem('carrito');
        if (carrito)
            this.productos = JSON.parse(carrito);
    }
    anadirCarrito(producto: Producto) {
        this.productos.push(producto);
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }

    eliminarCarrito(index: number) {
        this.productos.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(this.productos));
    }
    getProductos(): Observable<any> {
        return this.http.get(`${this.url}/obtener-lista-Productos`);
    }
    deleteProductos(id: String): Observable<any> {
        return this.http.delete(`${this.url}/borrar-producto/` + id);
    }
    postProductos(producto: Producto): Observable<any> {
        return this.http.post(`${this.url}/crear-producto`, producto);
    }
    getProducto(id: String): Observable<any> {
        return this.http.delete(this.url + id);
    }
}
