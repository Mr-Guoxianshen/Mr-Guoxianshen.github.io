const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
export default class Land {
  constructor (img, x, ctx) {
    this.img = img;
    this.x = x;
    this.speed = -0.1;
    this.ctx = ctx;
  }

  update (dt) {
    if (this.x < -336) {
      // 因为有可能此时this.x已经小于-800，而是-80x了
      // 所以要把这个误差算出来，再移到最右时加回来
      this.x = 336 * 4 + this.x;
    }
    this.x = this.x + dt * this.speed;
  }

  draw () {
    this.ctx.drawImage(this.img, this.x, 600-112);
  }
}
