import { Injectable } from '@angular/core';
import { Category } from 'app/core/types/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  categories: Category[] = [
    {
      key: 'ILUSTRACION',
      name: 'PORTFOLIO.CATEGORIES.ILUSTRACION',
      projects: [
        { key: 'LEONARDO', title: 'PORTFOLIO.PROJECTS.LEONARDO.TITLE', img: 'assets/media/retrato-leonardo.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.LEONARDO.DESCRIPTION' },
        { key: 'VITRUVIO', title: 'PORTFOLIO.PROJECTS.VITRUVIO.TITLE', img: 'assets/media/el-hombre-de-vitruvio.jpeg', type: 'image', desc: 'PORTFOLIO.PROJECTS.VITRUVIO.DESCRIPTION' },
        { key: 'VENUS', title: 'PORTFOLIO.PROJECTS.VENUS.TITLE', img: 'assets/media/el-nacimiento-de-venus.jpeg', type: 'image', desc: 'PORTFOLIO.PROJECTS.VENUS.DESCRIPTION' },
        { key: 'REGRESOFUTURO', title: 'PORTFOLIO.PROJECTS.REGRESOFUTURO.TITLE', video: 'assets/media/dibujo1.MOV', type: 'video', desc: 'PORTFOLIO.PROJECTS.REGRESOFUTURO.DESCRIPTION' },
        { key: 'PULPFICTION', title: 'PORTFOLIO.PROJECTS.PULPFICTION.TITLE', video: 'assets/media/dibujo2.MOV', type: 'video', desc: 'PORTFOLIO.PROJECTS.PULPFICTION.DESCRIPTION' }
      ]
    },
    {
      key: 'FOTOGRAFIA',
      name: 'PORTFOLIO.CATEGORIES.FOTOGRAFIA',
      projects: [
        { key: 'PERRO1', title: 'PORTFOLIO.PROJECTS.PERRO1.TITLE', img: 'assets/media/perro-1.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.PERRO1.DESCRIPTION' },
        { key: 'PERRO2', title: 'PORTFOLIO.PROJECTS.PERRO2.TITLE', img: 'assets/media/perro-2.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.PERRO2.DESCRIPTION' },
        { key: 'PERRO3', title: 'PORTFOLIO.PROJECTS.PERRO3.TITLE', img: 'assets/media/perro-3.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.PERRO3.DESCRIPTION' },
        { key: 'GATO1', title: 'PORTFOLIO.PROJECTS.GATO1.TITLE', img: 'assets/media/gato-1.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.GATO1.DESCRIPTION' },
        { key: 'GATO2', title: 'PORTFOLIO.PROJECTS.GATO2.TITLE', img: 'assets/media/gato-2.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.GATO2.DESCRIPTION' },
        { key: 'PAISAJE1', title: 'PORTFOLIO.PROJECTS.PAISAJE1.TITLE', img: 'assets/media/paisaje-1.jpeg', type: 'image', desc: 'PORTFOLIO.PROJECTS.PAISAJE1.DESCRIPTION' },
        { key: 'PAISAJE2', title: 'PORTFOLIO.PROJECTS.PAISAJE2.TITLE', img: 'assets/media/paisaje-2.jpeg', type: 'image', desc: 'PORTFOLIO.PROJECTS.PAISAJE2.DESCRIPTION' },
        { key: 'ESPALDA', title: 'PORTFOLIO.PROJECTS.ESPALDA.TITLE', img: 'assets/media/espalda.jpeg', type: 'image', desc: 'PORTFOLIO.PROJECTS.ESPALDA.DESCRIPTION' }
      ]
    },
    {
      key: 'WEB',
      name: 'PORTFOLIO.CATEGORIES.WEB',
      projects: [
        { key: 'MAQUETACION', title: 'PORTFOLIO.PROJECTS.MAQUETACION.TITLE', video: 'assets/media/maquetacion.mp4', type: 'video', desc: 'PORTFOLIO.PROJECTS.MAQUETACION.DESCRIPTION' },
        { key: 'TFG', title: 'PORTFOLIO.PROJECTS.TFG.TITLE', video: 'assets/media/tfg.mp4', type: 'video', desc: 'PORTFOLIO.PROJECTS.TFG.DESCRIPTION' },
        { key: 'ICARE', title: 'PORTFOLIO.PROJECTS.ICARE.TITLE', video: 'assets/media/icare.mp4', type: 'video', desc: 'PORTFOLIO.PROJECTS.ICARE.DESCRIPTION' }
      ]
    },
    {
      key: 'DISENO',
      name: 'PORTFOLIO.CATEGORIES.DISENO',
      projects: [
        { key: 'NITEN', title: 'PORTFOLIO.PROJECTS.NITEN.TITLE', img: 'assets/media/niten.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.NITEN.DESCRIPTION' },
        { key: 'MOA', title: 'PORTFOLIO.PROJECTS.MOA.TITLE', img: 'assets/media/moa.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.MOA.DESCRIPTION' },
        { key: 'FLANER', title: 'PORTFOLIO.PROJECTS.FLANER.TITLE', img: 'assets/media/flaner.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.FLANER.DESCRIPTION' },
        { key: 'REPAVAR', title: 'PORTFOLIO.PROJECTS.REPAVAR.TITLE', img: 'assets/media/repavar.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.REPAVAR.DESCRIPTION' },
        { key: 'LUNGTIME', title: 'PORTFOLIO.PROJECTS.LUNGTIME.TITLE', img: 'assets/media/lungtime.jpg', type: 'image', desc: 'PORTFOLIO.PROJECTS.LUNGTIME.DESCRIPTION' }
      ]
    },
    {
      key: '3D',
      name: 'PORTFOLIO.CATEGORIES.3D',
      projects: [
        { key: 'PERSONAJE', title: 'PORTFOLIO.PROJECTS.PERSONAJE.TITLE', model3D: 'assets/media/me.gltf', type: '3d', desc: 'PORTFOLIO.PROJECTS.PERSONAJE.DESCRIPTION' },
        { key: 'MUSEO', title: 'PORTFOLIO.PROJECTS.MUSEO.TITLE', model3D: 'assets/media/niten.gltf', type: '3d', desc: 'PORTFOLIO.PROJECTS.MUSEO.DESCRIPTION' }
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }
}
