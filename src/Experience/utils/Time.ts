export default class Time {
  start;
  current;
  elapsed;
  delta;

  constructor() {
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    this.update();
  }

  update() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;

    this.elapsed = this.current - this.start;

    dispatchEvent(new CustomEvent("update"));
    window.requestAnimationFrame(() => this.update());
  }
}
