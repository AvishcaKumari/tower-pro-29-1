class Platform{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        AudioWorkletNode.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(64, 45, 38);
        rectangle(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
