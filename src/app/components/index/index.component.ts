import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-index',
  imports: [TranslateModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('article1') article1Ref!: ElementRef<HTMLElement>;
  @ViewChild('article2') article2Ref!: ElementRef<HTMLElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private model!: THREE.Object3D;
  private animationProgress = 0;
  private isAnimating = false;
  private startTime = 0;
  private animationDuration = 4000; // duración total (ms)

  ngAfterViewInit(): void {
    this.initThree();
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;

    // Escena
    this.scene = new THREE.Scene();

    // Cámara
    this.camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 0.5, 3);
    this.camera.lookAt(0, 0, 0);

    // Renderizador
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Luces
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(3, 5, 5);
    this.scene.add(dirLight);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    // Cargar modelo GLTF
    const loader = new GLTFLoader();
    loader.load('assets/media/me.gltf', (gltf: GLTF) => {
      this.model = gltf.scene;
      this.model.scale.set(0.3, 0.3, 0.3);

      // Centrar el modelo
      const box = new THREE.Box3().setFromObject(this.model);
      const center = box.getCenter(new THREE.Vector3());
      this.model.position.sub(center);

      this.scene.add(this.model);
      this.animate();
    });

    // Ajuste al redimensionar
    window.addEventListener('resize', () => {
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  /** Inicia la animación al pulsar el botón */
  public startAnimation() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.startTime = performance.now();
    if (this.article2Ref) {
      this.article2Ref.nativeElement.style.display = 'flex';
    }
  }

  private animate = (time?: number) => {
    requestAnimationFrame(this.animate);

    if (!this.model) return;

    if (this.isAnimating && time) {
      const elapsed = time - this.startTime;
      this.animationProgress = Math.min(elapsed / this.animationDuration, 1);
      const t = this.easeInOutQuad(this.animationProgress);

      // Desplazamiento lateral del modelo
      const lateralShift = -1; // valor final en unidades Three.js, ajusta según tu escena
      this.model.position.x = lateralShift * t;

      // --- Desplazamiento vertical ---
      const verticalShift = -0.5; // mover hacia abajo
      this.model.position.y = -0.56 + verticalShift * t;

      // --- Zoom progresivo ---
      const startScale = 0.3;
      const endScale = 0.5; // valor final de zoom
      const scale = startScale + (endScale - startScale) * t;
      this.model.scale.set(scale, scale, scale);

      // --- Giro hacia la derecha ---
      const startRotationY = 0;
      const endRotationY = Math.PI / 6; // gira 30 grados hacia la derecha
      this.model.rotation.y = startRotationY + (endRotationY - startRotationY) * t;

      // --- Animación de artículos ---
      const articleShiftY = -90 * t;
      if (this.article1Ref) {
        this.article1Ref.nativeElement.style.transform = `translateY(${articleShiftY}vh)`;
      }
      if (this.article2Ref) {
        // opcional: el segundo puede aparecer con efecto parallax más suave
        const secondShift = 90 * (1 - t); 
        this.article2Ref.nativeElement.style.transform = `translateY(${secondShift}vh)`;
      }

      if (this.animationProgress >= 1) {
        this.isAnimating = false;
      }
    }

    this.renderer.render(this.scene, this.camera);
  };

  // Easing para suavizar animación
  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
}