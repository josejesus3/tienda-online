import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { ServicioProductoService } from '../servicio-producto.service';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {

   productos: Producto[] = []; 
  constructor( private servicioProducto:ServicioProductoService){
    servicioProducto.detalleProductoEmitter.subscribe((producto:Producto)=>alert(`Producto: ${producto.descripcion}, $${producto.precio}`))
  }
  ngOnInit(){
        this.productos=this.servicioProducto.productos;
       

  }
  eliminarProducto(indice: number) {
this.servicioProducto.eliminarProducto(indice);
}
  

 
}
