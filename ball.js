class Ball {
    constructor(x,y,radius) {
        var ball_options ={
            isStatic :false,
            restitution: 1.0
        }
        this.radius = radius;
    
        this.ground = Bodies.circle(x,y,radius,ball_options);
        World.add(world,this.ground);
    }
    
    display() {
        ellipseMode(RADIUS);
        fill("white");
        push();
        translate(this.ground.position.x,this.ground.position.y);
        ellipse(0,0,this.radius,this.radius);
        pop();
    
    }
    
    }