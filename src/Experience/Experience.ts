import * as Three from "three";
import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Resources from "./utils/Resources";
import assets from "./utils/assets";

export default class Experience implements IExperience {
  static instance: Experience;

  canvas;
  sizes;
  time;
  scene;
  camera;
  renderer;
  world;
  resources;

  constructor(canvas: HTMLCanvasElement | null = null) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.canvas = canvas;

    this.scene = new Three.Scene();
    this.sizes = new Sizes();
    this.time = new Time();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();
    this.resources = new Resources(assets);

    window.addEventListener("update", () => this.update());
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.camera?.resize();
    this.renderer?.resize();
  }
  update() {
    this.camera?.update();
    this.renderer?.update();
  }
}

export interface IExperience {
  canvas: HTMLCanvasElement | null | undefined;
  sizes: Sizes | undefined;
  time: Time | undefined;
  scene: Three.Scene | undefined;
  camera: Camera | undefined;
  renderer: Renderer | undefined;
  world: World | undefined;
  resources: Resources | undefined;

  resize(): void;
  update(): void;
}
