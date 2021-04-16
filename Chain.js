    class Chain{
        constructor(bodyA,pointB){
            var options={
                bodyA:bodyA,
                pointB:pointB,
                stiffness:0.007,
                legth:1
            }

            this.bodyA=bodyA
            this.pointB=pointB
            this.chain=Constraint.create(options);
            World.add(world,this.chain)
        }

        attach(bodyA){
            this.chain.bodyA=bodyA
        }

        fly(){
            this.chain.bodyA=null
        }

        display(){
            if(this.chain.bodyA){
                var pointB=this.pointB

                strokeWeight(2);
                line (this.bodyA.position.x,this.bodyA.position.y,pointB.x,pointB.y);
            }
        }
    }