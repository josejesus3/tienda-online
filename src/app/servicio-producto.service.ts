import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './producto/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioProductoService {

  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];
  detalleProductoEmitter=new EventEmitter<Producto>();

 agregarProducto(producto: Producto){ 
    this.productos.push(producto); 
  }
  eliminarProducto(indice:number){
    this.productos.splice(indice,1);
console.log("eliminar");
  }

}
