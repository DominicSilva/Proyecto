import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/productoService.service';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.component.html',
  styleUrls: ['./cap.component.css']
})
export class CapComponent implements OnInit {

  gorras: Producto [] = [];

  constructor(public productService: ProductoService) { 
    this.gorras.push(new Producto("Jordan negra","Gorra jordan color negra",100000,"assets/img/gorra1.png"));
    this.gorras.push(new Producto("Nike negra","Gorra Nike color negra",100000,"assets/img/gorra2.png"));
    this.gorras.push(new Producto("Jordan gris","Gorra jordan color gris",100000,"assets/img/gorra3.png"));
    this.gorras.push(new Producto("NY blanca","Gorra NY color blanca",100000,"assets/img/gorra4.png"));
    this.gorras.push(new Producto("NY roja","Gorra NY color Roja",100000,"assets/img/gorra5.png"));
    this.gorras.push(new Producto("NY blanca","Gorra NY color blanca",100000,"assets/img/gorra6.png"));
  }

  ngOnInit(): void {
  }

}
