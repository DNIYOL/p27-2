class BOB {
  
  constructor(x, y, Dia) {
    var options = {
        isStatic: true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
    }
    this.body = Bodies.circle(x, y, Dia-45, options);
    this.Dia = Dia;
    this.xpos=x;
    this.ypos=y;
    

    World.add(world, this.body);
  }
  display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     rectMode(CENTER);
     fill("magenta");
     //console.log(this.xpos, this.ypos, this.dia);
     circle(this.xpos, this.ypos, this.Dia);
     pop();
  }
};
