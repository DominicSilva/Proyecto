import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/productoService.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public productService: ProductoService) { }

  ngOnInit(): void {
  }


  carro(){
    
  }
}
