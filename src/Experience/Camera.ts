import * as Three from "three";
import Experience from "./Experience";

export default class Camera implements ICamera {
  experience;
  sizes;
  scene;
  canvas;
  perspectiveCamera: TPerspectiveCamera;
  orthographicCamera: OrthographicCamera;
  frustumSize = 0;

  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrtographicCamera();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new Three.PerspectiveCamera(
      35,
      this.sizes!.width / this.sizes!.height,
      0.1,
      100
    );

    this.scene?.add(this.perspectiveCamera);
  }

  createOrtographicCamera() {
    this.frustumSize = 5;
    this.orthographicCamera = new Three.OrthographicCamera(
      (-this.sizes!.aspect * this.frustumSize) / 2,
      (this.sizes!.aspect * this.frustumSize) / 2,
      this.frustumSize / 2,
      -this.frustumSize / 2,
      -100,
      100
    );

    this.scene?.add(this.orthographicCamera);
  }

  resize() {
    if (!this.perspectiveCamera || !this.orthographicCamera) return;

    // Perspective camera
    this.perspectiveCamera.aspect = this.sizes!.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // Orthographic camera
    this.orthographicCamera.left = (-this.sizes!.aspect * this.frustumSize) / 2;
    this.orthographicCamera.right = (this.sizes!.aspect * this.frustumSize) / 2;
    this.orthographicCamera.top = this.frustumSize / 2;
    this.orthographicCamera.bottom = -this.frustumSize / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {}
}

type TPerspectiveCamera = Three.PerspectiveCamera | undefined;
type OrthographicCamera = Three.OrthographicCamera | undefined;

interface ICamera {
  perspectiveCamera: TPerspectiveCamera;
  orthographicCamera: OrthographicCamera;
  frustumSize: number | undefined;

  createPerspectiveCamera(): void;
  createOrtographicCamera(): void;
  resize(): void;
  update(): void;
}
