class Bob {
    constructor(x,y){
    var options={
    'density':1,
    'restitution':0.9,
    'friction':0.1,
    isStatic:false,
    
    }
    
    this.body=Bodies.circle(x,y,60,options);
    this.radius=60;
    World.add(world,this.body);
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    fill("red");
    stroke("blue");
    strokeWeight(1);
    translate(pos.x,pos.y);
    rotate(angle)
    ellipseMode(RADIUS);
    circle(0,0,this.radius);
    
    pop();
    
    
    
    }
    
    } 