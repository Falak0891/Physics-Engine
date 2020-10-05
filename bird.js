class Bird{
    constructor(x,y){
        var options = {
            'restitution' :  0.5,
            'fricion' : 1,
            'density' : 1.5
        }
        this.body = Bodies.rectangle(x,y,50,50, options);

        this.width= 50;
        this.height = 50;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        stroke()
    }
}