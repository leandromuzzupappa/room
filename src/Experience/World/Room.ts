import * as Three from "three";
import Experience from "../Experience";

export default class Room implements IRoom {
  experience;
  scene;

  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    const geometry = new Three.BoxGeometry(1, 1, 1);
    const material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Three.Mesh(geometry, material);
    this.scene!.add(cube);
  }

  resize() {}

  update() {}
}

interface IRoom {
  experience: Experience;

  resize(): void;
  update(): void;
}
