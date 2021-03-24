class Chain{
    constructor(BodyA,BodyB){
        var options = {
        BodyA:BodyA,
        BodyB:BodyB,
        stifness:0.04,
        Lenght:10,
    }
       this.chain= Constraint_create(options);
       World.add(world,chain);
    }
      display(){
          line(pointA,pointB);
      }
}