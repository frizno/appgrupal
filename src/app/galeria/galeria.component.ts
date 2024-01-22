// galeria.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  titulo = 'Galería de Arte';
  categoriaSeleccionada = '';
  obras = [
    { id: 1, titulo: 'Obra 1', descripcion: 'Descripción de la obra 1', categoria: 'Categoria1', imagen: 'assets/img/img1.png' },
    { id: 2, titulo: 'Obra 2', descripcion: 'Descripción de la obra 2', categoria: 'Categoria2', imagen: 'assets/img/img2.png' },
    { id: 3, titulo: 'Obra 3', descripcion: 'Descripción de la obra 3', categoria: 'Categoria1', imagen: 'assets/img/img3.png' },
    { id: 4, titulo: 'Obra 4', descripcion: 'Descripción de la obra 4', categoria: 'Categoria1', imagen: 'assets/img/img4.png' },
    { id: 5, titulo: 'Obra 5', descripcion: 'Descripción de la obra 5', categoria: 'Categoria2', imagen: 'assets/img/img5.png' },
    { id: 6, titulo: 'Obra 6', descripcion: 'Descripción de la obra 6', categoria: 'Categoria1', imagen: 'assets/img/img6.png' },

  ];

  obraSeleccionada: any;

  verDetalle(obra: any) {
    this.obraSeleccionada = obra;
  }
}
