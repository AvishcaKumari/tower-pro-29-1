class Box  {
  constructor(x, y, width, height){
    var option = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
    }
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    world.add(world,this.body);
  }
display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      fill("white");
}
}
