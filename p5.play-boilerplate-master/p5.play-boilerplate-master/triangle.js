class Triangle{
    constructor(x,y,sides,length,radius,vertices){
       var options = {
        //restitution:0.8
        isStatic: true
        }
        this.body = Bodies.polygon(x,y,sides,length,radius,vertices,options);
        //this.sides=sides==3;
        this.length=length;
         this.sides=sides;
         this.vertices=vertices;
         this.radius=radius;
        // this.x1=x1;
        // this.y1=y1;
        // this.x2=x2;
        // this.y2=y2;
        // this.x3=x3;
        // this.y3=y3;
        //this.radius=radius;
        // this.radiusY=radiusY;
        World.add(world,this.body);
       
    }  
    display(){
        // var fillvalues=0;
        // if (fillvalues==0) {
        //     for (let i = 0; i < this.body.vertices.length; i++) {
        //         var x1=this.body.vertices[i].x;
        //         var y1=this.body.vertices[i].y;
        //         var x2=this.body.vertices[i].x;
        //         var y2=this.body.vertices[i].y;
        //         var x3=this.body.vertices[i].x;
        //         var y3=this.body.vertices[i].y;
        //     } 
        //     fillvalues=1;
        // }
           //var ver = this.body.vertices.vector[0];
       //var ver1=ver1.vectorA;
          // var angle = this.body.angle;
              //push(); 
       // translate(pos.x1,pos.y1,pos.x2,pos.y2,pos.x3,pos.y3);
        //rotate(angle);
        var pos = this.body.position;
        fill("red");
        //ellipseMode(CENTER);
        //triangle (x1,y1,x2,y2,x3,y3);
        triangle (pos.x,pos.y,this.sides,this.length,this.radius,this.vertices);
       //pop();
       
       
    }     
 }