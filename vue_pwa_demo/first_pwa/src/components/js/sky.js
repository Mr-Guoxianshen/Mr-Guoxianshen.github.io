const width = document.documentElement.clientWidth;
export default class Pipe {
  constructor (img, x, ctx) {
    this.img = img;
    this.x = x;
    this.speed = -0.03;
    this.ctx = ctx;
  }

  update (dt) {
    if (this.x < -width) {
      // 因为有可能此时this.x已经小于-800，而是-80x了
      // 所以要把这个误差算出来，再移到最右时加回来
      this.x =  this.x + width * 2;
    }
    this.x = this.x + dt * this.speed;
  }

  draw () {
    this.ctx.drawImage(this.img, this.x, 0);
  }
}
