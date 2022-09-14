import * as Three from "three";
import Experience from "../Experience";
import Room from "./Room";

export default class World implements IWorld {
  experience;
  sizes;
  scene;
  canvas;
  camera;
  room;

  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;

    this.room = new Room();
  }

  resize() {}

  update() {}
}

interface IWorld {
  room: Room;

  resize(): void;
  update(): void;
}
