import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/productoService.service';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {


  tennis: Producto [] = [];

  constructor(public productService: ProductoService) { 
    this.tennis.push(new Producto("Jordan retro 4","Jordan retro 4 negros",500000,"assets/img/shoes1.png"));
    this.tennis.push(new Producto("Jordan 1","Jordan 1 negras",500000,"assets/img/shoes2.png"));
    this.tennis.push(new Producto("Jordan retor 4","Jordan retor 4 rojas",500000,"assets/img/shoes3.png"));
    this.tennis.push(new Producto("Jordan retro 4","Jordan retro 4 blancas",500000,"assets/img/shoes4.png"));
    this.tennis.push(new Producto("Jordan retro 4","Jordan retro 4 azules",500000,"assets/img/shoes5.png"));
    this.tennis.push(new Producto("Jordan 1","Jordan 1 rojas",500000,"assets/img/shoes6.png"));
  }

  ngOnInit(): void {
  }

}
