import { Injectable } from '@angular/core';
import { Category } from 'app/core/types/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  categories: Category[] = [
    { name: 'Ilustración', projects: [{title: 'Retrato Leonardo Da Vinci', img: 'assets/media/retrato-leonardo.jpg', type: 'image', desc: 'lorem'}, {title: 'El hombre de Vitruvio', img: 'assets/media/el-hombre-de-vitruvio.jpeg', type: 'image',  desc: 'lorem'}, {title: 'El nacimiento de Venus', img: 'assets/media/el-nacimiento-de-venus.jpeg', type: 'image',  desc: 'lorem'}, {title: 'Dibujo 1', video: 'assets/media/dibujo1.MOV', type: 'video',  desc: 'lorem'}, {title: 'Dibujo 2', video: 'assets/media/dibujo2.MOV', type: 'video',  desc: 'lorem'}] },
    { name: 'Fotografía', projects: [{title: 'Proyecto A', img: 'assets/media/perro-1.jpg', type: 'image', desc: 'lorem'}, {title: 'Proyecto B', img: 'assets/media/perro-2.jpg', type: 'image', desc: 'lorem'}, {title: 'Proyecto C', img: 'assets/media/perro-3.jpg', type: 'image', desc: 'lorem'}, {title: 'Proyecto D', img: 'assets/media/gato-1.jpg', type: 'image', desc: 'lorem'}, {title: 'Proyecto E', img: 'assets/media/gato-2.jpg', type: 'image', desc: 'lorem'}, {title: 'Proyecto F', img: 'assets/media/paisaje-1.jpeg', type: 'image', desc: 'lorem'}, {title: 'Proyecto G', img: 'assets/media/paisaje-2.jpeg', type: 'image', desc: 'lorem'}, {title: 'Proyecto H', img: 'assets/media/espalda.jpeg', type: 'image', desc: 'lorem'}] },
    { name: 'Web', projects: [{title: 'Maquetación web', video: 'assets/media/maquetacion.mp4', type: 'video', desc: 'lorem'}, {title: 'TFG dietética', video: 'assets/media/tfg.mp4', type: 'video', desc: 'lorem'}, {title: 'ICare', video: 'assets/media/icare.mp4', type: 'video', desc: 'lorem'}] },
    { name: 'Diseño', projects: [{title: 'Niten', img: 'assets/media/niten.jpg', type: 'image', desc: 'lorem'}, {title: 'MOA', img: 'assets/media/moa.jpg', type: 'image', desc: 'lorem'}, {title: 'Flâner', img: 'assets/media/flaner.jpg', type: 'image', desc: 'lorem'}, {title: 'Repavar', img: 'assets/media/repavar.jpg', type: 'image', desc: 'lorem'}, {title: 'LungTime', img: 'assets/media/lungtime.jpg', type: 'image', desc: 'lorem'}] },
    { name: '3D', projects: [{title: '3D 1', model3D: 'assets/media/me.gltf', type: '3d', desc: 'lorem'}, {title: '3D 2', model3D: 'assets/media/niten.gltf', type: '3d', desc: 'lorem'}] },
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }
}
