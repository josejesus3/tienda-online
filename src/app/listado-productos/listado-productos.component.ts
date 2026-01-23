import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto/producto.model';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {

  productos: Producto[] = [
    new Producto('Pantalon', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];
  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if (
      this.descripcionInput.trim() === '' ||
      this.precioInput == null ||
      this.precioInput <= 0
    ) {
      console.log('Debe Ingresar una descripcion y un precio valido');
      return;
    }else{
      const producto=new Producto(this.descripcionInput,this.precioInput);
      this.productos.push(producto);
      this.descripcionInput='';
      this.precioInput=0;
    }
  }
  eliminarProducto(indice: number) {
this.productos.splice(indice,1);
}
}
