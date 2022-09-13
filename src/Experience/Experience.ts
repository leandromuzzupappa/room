import * as Three from "three";
import Sizes from "./utils/Sizes";

export default class Experience {
  static instance: Experience;

  canvas;
  sizes;
  scene: Three.Scene | undefined;

  constructor(canvas: HTMLCanvasElement | null = null) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.canvas = canvas;

    this.scene = new Three.Scene();
    this.sizes = new Sizes();

    console.log("sizes", this.sizes);
  }
}
