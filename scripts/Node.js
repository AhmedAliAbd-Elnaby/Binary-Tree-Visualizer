let space = 600 / 6;
let spacesOfNodes = [200, 100, 50, 25];
class Node {
    constructor(x, y, r, ctx, data, depth) {
      this.leftNode = null;
      this.rightNode = null;
      this.x = x;
      this.y = y;
      this.r = 15;
      this.ctx = ctx;
      this.data = data;
      this.depth = depth;
      // this.showPos()
    }
    showPos(){
      console.log(this.x, this.y)
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      this.ctx.strokeStyle = "green"
      this.ctx.lineWidth = 3
      this.ctx.textAlign = "center"; // Align text horizontally to the center
      this.ctx.font = 15 + "px Helvetica";
      this.ctx.textBaseline = "middle"; // Align text vertically to the middlehe middle
      this.ctx.fillText(this.data, this.x, this.y);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  
    getData() {
      return this.data;
    }
  
    getX() {
      return this.x;
    }
  
    getY() {
      return this.y;
    }
  
    getRadius() {
      return this.r;
    }
  
    leftCoordinate() {
      space = spacesOfNodes[(this.y - 30)/ 100]
      return { cx: this.x - space, cy: this.y + 100 };
    }
  
    rightCoordinate() {
      space = spacesOfNodes[(this.y - 30)/ 100]
      return { cx: this.x + space, cy: this.y + 100 };
    }
  }