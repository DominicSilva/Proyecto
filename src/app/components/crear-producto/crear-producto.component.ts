import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/productoService.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-crear-producto',
    templateUrl: './crear-producto.component.html',
    styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
    productoForm: FormGroup;
    regexNumero = /^[0-9]*$/;

    constructor(private fb: FormBuilder, private router: Router, private _productoService: ProductoService) {
        this.productoForm = this.fb.group({
            nombre: ['', [Validators.required]],
            info: ['', [Validators.required]],
            precio: ['', [Validators.required, Validators.pattern(this.regexNumero)]],
            producto: ['', [Validators.required]],
        })

    }
    ngOnInit(): void {
    }

    agregarProducto() {
        console.log(this.productoForm);
        console.log(this.productoForm.get('producto')?.value)

        const PRODUCTO: Producto = {
            nombre: this.productoForm.get('nombre')?.value,
            info: this.productoForm.get('info')?.value,
            precio: this.productoForm.get('precio')?.value,
            producto: this.productoForm.get('producto')?.value,
        }
        console.log(PRODUCTO)

        this._productoService.postProductos(PRODUCTO).subscribe(data => {
            this.router.navigate(['shirt']);
            Swal.fire({
                title: 'Exito!',
                text: 'El producto se agrago corrextamente',
                icon: 'success',
                confirmButtonText: 'Vale'
            })
        }, error => {
            console.log(error);
        })
    }

}
