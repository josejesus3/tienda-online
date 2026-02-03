import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from './producto.model';
import { ServicioProductoService } from '../servicio-producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input()producto!:Producto;
  @Output() eliminarEvent=new EventEmitter<void>();
constructor(private productoServicio:ServicioProductoService){}

emitirDetalleProducto() {
this.productoServicio.detalleProductoEmitter.emit(this.producto);
}
  eliminarProducto(){
    this.eliminarEvent.emit()
    console.log("eliminar producto desde hijo")
  }



}


