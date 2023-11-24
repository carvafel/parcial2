import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import {RecetaService} from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {
  selectedReceta!: Receta;
  recetas: Array<Receta> = [];
  selected: Boolean = false;

  constructor(private recetaService: RecetaService) { }

  onSelected(receta: Receta): void {
    this.selected = true;
    this.selectedReceta = receta;
  }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas
      ;
    });
  }


  ngOnInit() {
    this.getRecetas();
  }

}
