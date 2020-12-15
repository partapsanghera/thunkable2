function roadMarking() {
    this.w = 13.5;
    this.h = 50;

    this.x = floor(width/2.0 - this.w/2);
    this.y = 0;

    this.show = function() {
        //strokeWeight(3);
        fill(255,182,52);
        rect(this.x, this.y, this.w, this.h);
    }

    this.update = function() {
        this.y += playerSpeed;
    }

    this.offscreen = function() {
        return (this.y > height);
    }
}
