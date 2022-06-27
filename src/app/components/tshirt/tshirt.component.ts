import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/productoService.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tshirt',
    templateUrl: './tshirt.component.html',
    styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {

    camisas: Producto[] = [];

    constructor(public productService: ProductoService, private router: Router) {
        // this.camisas.push(new Producto("Nike blanca", "Camiseta Nike blanca", 150000, "assets/img/camisa1.png"));
        // this.camisas.push(new Producto("Jordan roja", "Camiseta Jordan roja", 150000, "assets/img/camisa2.png"));
        // this.camisas.push(new Producto("Jordan negra", "Camiseta Jordan negra", 150000, "assets/img/camisa3.png"));
        // this.camisas.push(new Producto("Jordan gris", "Camiseta Jordan gris", 150000, "assets/img/camisa4.png"));
        // this.camisas.push(new Producto("Jordan blanca", "Camiseta Jordan blanca", 150000, "assets/img/camisa5.png"));
        // this.camisas.push(new Producto("Nike negra", "Camiseta Nike negra", 150000, "assets/img/camisa6.png"));
    }
    ngOnInit(): void {
        this.obtenerProductos();
    }

    obtenerProductos() {
        this.productService.getProductos().subscribe(data => {
            console.log(data);
            this.camisas = data;
        }, error => {
            console.log(error)
        });
    }

    eliminarProducto(id: any) {
        Swal.fire({
            title: 'Desea eliminar el producto?',
            text: "esta accion no sera revercible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.productService.deleteProductos(id).subscribe(data => {
                    this.obtenerProductos()
                    Swal.fire({
                        icon: 'success',
                        title: 'El producto se elimino'
                    })
                }, error => {
                    console.log(error)
                })
            }
        })
    }
}

