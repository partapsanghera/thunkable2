function Player() {
    this.w = 60;
    this.h = 105;

    this.x = floor(width/2 - this.w/2);
    this.y = floor((3 * height/4) - this.h/2);

    this.show = function() {
        image(im_car_red, this.x, this.y, this.w, this.h);
    }

    this.turnLeft = function() {
        this.x -= 5;
        this.x = constrain(this.x, 0, width-this.w);
    }

    this.turnRight = function() {
        this.x += 5;
        this.x = constrain(this.x, 0, width-this.w);
    }
    this.turnUp = function() {
        this.y -= 5;
        this.y = constrain(this.y, 0, height-this.h);
    }

    this.turnDown = function() {
        this.y += 5;
        this.y = constrain(this.y, 0, height-this.h);
    }
    //this.up=function() 
}
