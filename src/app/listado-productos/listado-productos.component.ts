import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {

   productos: Producto[] = [ 
    new Producto('Pantalón', 130.0), 
    new Producto('Camisa', 80.0), 
    new Producto('Playera', 50.0), 
  ]; 
 
  agregarProducto(producto: Producto){ 
    this.productos.push(producto); 
  }
  eliminarProducto(indice:number){
    this.productos.splice(indice,1);

  }
}
