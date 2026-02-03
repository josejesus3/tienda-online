import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ServicioProductoService } from '../servicio-producto.service';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css',
})
export class FormularioProductoComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(private servicioProducto: ServicioProductoService) {}

  agregarProductoS() {
   

    //Validar que sean valores correcto
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.servicioProducto.agregarProducto(producto);

    // Limpiamos los campos del formulario
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
