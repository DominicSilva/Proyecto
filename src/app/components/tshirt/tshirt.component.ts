import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/productoService.service';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {

  camisas: Producto [] = [];

  constructor(public productService: ProductoService) { 
    this.camisas.push(new Producto("Nike blanca","Camiseta Nike blanca",150000,"assets/img/camisa1.png"));
    this.camisas.push(new Producto("Jordan roja","Camiseta Jordan roja",150000,"assets/img/camisa2.png"));
    this.camisas.push(new Producto("Jordan negra","Camiseta Jordan negra",150000,"assets/img/camisa3.png"));
    this.camisas.push(new Producto("Jordan gris","Camiseta Jordan gris",150000,"assets/img/camisa4.png"));
    this.camisas.push(new Producto("Jordan blanca","Camiseta Jordan blanca",150000,"assets/img/camisa5.png"));
    this.camisas.push(new Producto("Nike negra","Camiseta Nike negra",150000,"assets/img/camisa6.png"));
  }
  ngOnInit(): void {
  }

}
