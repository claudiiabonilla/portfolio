import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Category } from '@app/core/types/project';
import gsap from 'gsap';
import { Subject } from 'rxjs';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-flipbook',
  imports: [],
  templateUrl: './flipbook.component.html',
  styleUrl: './flipbook.component.scss'
})
export class FlipbookComponent implements AfterViewInit, OnChanges, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  currentPage = 0;
  @Input() category: Category | null = null;
  @ViewChild('cover') cover!: ElementRef;
  @ViewChildren('pages') pages!: QueryList<ElementRef>;
  @ViewChild('bookContainer') bookContainer!: ElementRef;

  private timeline = gsap.timeline();
  private animationFrames: number[] = [];

  ngAfterViewInit(): void {
    this.pages.changes.subscribe(() => {
      this.init3DScenes();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && this.category) {
      this.currentPage = 0;
      this.timeline.clear();
      gsap.killTweensOf("*");
      setTimeout(() => {
        this.animateBookOpen();
        this.init3DScenes();
      }, 100);
    }
  }

  private animateBookOpen() {
    if (!this.cover) return;
    gsap.fromTo(
      this.cover.nativeElement,
      { rotationY: 0, transformOrigin: 'left center' },
      { rotationY: -180, duration: 1, ease: 'power2.inOut' }
    );
  }

  nextPage() {
    if (this.category && this.currentPage < this.category.projects.length - 1) {
      this.animatePageFlip(this.currentPage);
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.category && this.currentPage > 0) {
      this.currentPage--;
      this.animatePageFlip(this.currentPage, true);
    }
  }

  private animatePageFlip(pageIndex: number, reverse = false) {
    const pagesArray = this.pages.toArray();
    const page = pagesArray[pageIndex].nativeElement;

    gsap.fromTo(page,
      { rotationY: reverse ? -180 : 0 },
      { rotationY: reverse ? 0 : -180, duration: 0.8, ease: 'power2.inOut' }
    );
  }

  private init3DScenes() {
    this.pages.forEach((pageRef, index) => {
      const project = this.category?.projects[index];
      if (project?.type === '3d') {
        const canvas = pageRef.nativeElement.querySelector('canvas');
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(260, 300);
        camera.position.z = 2;

        // Luz
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        // Loader del modelo
        const loader = new GLTFLoader();
        const path = project.model3D || 'assets/media/me.gltf';
        loader.load(path, (gltf: GLTF) => {
          const model = gltf.scene;
          model.scale.set(0.3, 0.3, 0.3);

          // Centrar modelo
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          console.log(project.model3D);

          scene.add(model);

          const animate = () => {
            model.rotation.y += 0.01;
            renderer.render(scene, camera);
            const frameId = requestAnimationFrame(animate);
            this.animationFrames.push(frameId);
          };
          animate();
        }, undefined, (err) => console.error('Error cargando modelo', err));
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
