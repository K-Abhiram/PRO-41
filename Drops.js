class Drops{
    constructor(x,y){

        var options = {
            'restitution' : 0.1,
            'friction' : 0.001
        }
        this.body = Bodies.circle (x,y,10, options);
        this.r = 10;
        

        World.add(world,this.body);

    }

     update(){
        if( this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x: random (-100,500), y: random(-600,0)})
        }
     }
         
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
          
            fill ("blue");
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y, this.r, this.r);


        }

    
}