class Plinko {
	constructor(x,y) {
	var options={
		isStatic:true,
		restitution:0,
		friction:1,
		density:1.2
	}
	this.x=x;
	this.y=y;
	this.r=10;
	this.body=Bodies.circle(this.x, this.y, this.r/2, options)
	World.add(world, this.body);
	}
	display() {
    var pos=this.body.position;
    var angle=this.body.angle;
	push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
	pop();		
	}
}