class Ground{
    constructor(x,y,width,height){
       var options = {
        isStatic : true,
        density : 10,
        frictionStatic: 100
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }  
    display(){
        var pos = this.body.position;
        fill("green");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
       //rect(0,0,this.width,this.height);
        //pop();
       // translate(pos.x,pos.y);
        //push(); 
    }     
 }