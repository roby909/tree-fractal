function Leaf(pos) {
  this.pos = pos;

  this.jitter = function() {
    this.pos.x += random(-1,1);
    this.pos.y += random(-1,1);
  }

  this.show = function() {
    fill(255, 0, 100, 75);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 8, 8);
  }
}
