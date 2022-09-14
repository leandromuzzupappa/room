import Experience from "../Experience";

export default class Resources {
  experience;
  renderer;
  assets;

  constructor(assets: any) {
    this.experience = new Experience();
    this.renderer = this.experience.renderer;
    this.assets = assets;
    console.log(assets);

    window.addEventListener("resize", () => {
      dispatchEvent(new CustomEvent("resize"));
    });
  }
}
