parts = []

function setup() {
  createCanvas(500,500);
  
  for(var i=0; i<50; i++){
	parts[i] = new Particle(createVector(random(0,500), random(0,500)));
  }
}

function draw() {
	background(51);
	
	for(var i=0; i<parts.length; i++){
		parts[i].update();
		parts[i].render();
		for(var j=0; j<parts.length; j++){
			if(parts[i].pos.equals(parts[j].pos))
				continue;
			if(parts[i].pos.dist(parts[j].pos)<50){
				stroke(255);
				line(parts[i].pos.x, parts[i].pos.y, parts[j].pos.x, parts[j].pos.y);
			}
		}
		if (parts[i].pos.x>500 || parts[i].pos.y>500 || parts[i].pos.y<0 || parts[i].pos.x<0){
			parts.splice(i, 1);
			newpart();
		}
	}
	
	
}

function Particle(pos){
	this.pos = pos;
	this.vel = createVector(random(-.5,.5), random(-.5,.5));
	
	this.render = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, 3);
	}
	
	this.update = function(){
		this.pos.add(this.vel);
	}
}

function newpart(){
	parts.push(new Particle(createVector(random(0,500), random(0,500))));
}