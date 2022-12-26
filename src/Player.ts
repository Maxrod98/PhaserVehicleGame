import 'phaser';
import { Updatable } from './Updatable';

export class Player implements Updatable {

    private scene: Phaser.Scene;
    private car: MatterJS.CompositeType;
    private body: MatterJS.BodyType;
    private wheelA: MatterJS.BodyType;
    private keys: object;

    constructor (scene: Phaser.Scene, xx: number, yy: number)
    {
        var MatterJSRef = scene.matter;

        this.scene = scene;

        var group = MatterJSRef.body.nextGroup(true);

        this.wheelA = MatterJSRef.bodies.circle(xx, yy, 50, { 
            collisionFilter: {
                group: group
            },
            friction: 0.9,
        } as MatterJS.IBodyDefinition);

        scene.matter.world.add(this.wheelA);

        this.keys = scene.input.keyboard.addKeys('D,A,W');
    }
    // implements
    update(time : number, delta : number){ 
        var MatterJSRef = this.scene.matter;
        let decided = false;

        var Body = this.scene.matter.body;
        if (this.keys['D'].isDown) {
            Body.setAngularVelocity(this.wheelA,1.5);
            //Body.applyForce(this.wheelA, {x: this.wheelA.position.x, y: this.wheelA.position.y - 25} as MatterJS.Vector, {x: 0.1, y: 0} as MatterJS.Vector)
            decided = true;
        }

        if (this.keys['A'].isDown) {
            Body.setAngularVelocity(this.wheelA,-1.5);
            decided = true;
        }

        if (!decided) {
            Body.setAngularVelocity(this.wheelA,0);
        }
        
        let list_pairs = this.scene.matter.world.engine.pairs.list;
        let length_list = list_pairs.length;

        let jumpVector: MatterJS.Vector;
        let collides = false;
        for (let i = 0; i < length_list; i++) {
            let collision = list_pairs[i].collision;
            if (list_pairs[i].activeContacts.length > 0 && (collision.bodyA.id == this.wheelA.id || collision.bodyB.id == this.wheelA.id)) {
                if (collision.normal.y > 0.1) {
                    collides = true;
                    jumpVector = collision.normal as MatterJS.Vector;
                    jumpVector.y *= -1;
                    jumpVector.x *= -1;
                    jumpVector.y *= 30;
                    jumpVector.x *= 30;
                    jumpVector.x += this.wheelA.velocity.x;
                    
                    break;
                }
            }
        }
        
        //console.log(num_collisions);
        //console.log(list_pairs);

        if (this.keys['W'].isDown && collides) {
            //Body.setVelocity(this.wheelA, {x: this.wheelA.velocity.x, y: -50} as MatterJS.Vector);
            Body.setVelocity(this.wheelA, jumpVector);
        }
    }
}
