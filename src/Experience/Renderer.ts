import * as Three from "three";
import Experience from "./Experience";

export default class Renderer implements IRenderer {
  experience;
  sizes;
  scene;
  canvas;
  camera;
  renderer: Three.WebGLRenderer | undefined;

  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.setRenderer();
  }

  setRenderer() {
    if (!this.canvas) return;

    this.renderer = new Three.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = Three.sRGBEncoding;
    this.renderer.toneMapping = Three.CineonToneMapping;
    this.renderer.toneMappingExposure = 1.75;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = Three.PCFSoftShadowMap;
    this.renderer.setSize(this.sizes!.width, this.sizes!.height);
    this.renderer.setPixelRatio(this.sizes!.pixelRatio);
  }

  resize() {
    if (!this.renderer) return;

    this.renderer.setSize(this.sizes!.width, this.sizes!.height);
    this.renderer.setPixelRatio(this.sizes!.pixelRatio);
  }

  update() {
    if (!this.renderer || !this.scene || !this.camera) return;

    if (this.camera?.perspectiveCamera)
      this.renderer?.render(this.scene, this.camera?.perspectiveCamera);

    if (this.camera?.orthographicCamera)
      this.renderer?.render(this.scene, this.camera?.orthographicCamera);
  }
}

interface IRenderer {
  renderer: Three.WebGLRenderer | undefined;

  resize(): void;
  update(): void;
}
