import 'phaser';
import { Updatable } from './Updatable';

export class CarObject implements Updatable {

    private scene: Phaser.Scene;
    private car: MatterJS.CompositeType;
    private body: MatterJS.BodyType;
    private wheelA: MatterJS.BodyType;
    private wheelB: MatterJS.BodyType;
    private axelA: MatterJS.ConstraintType;
    private axelB: MatterJS.ConstraintType;
    private keys: object;

    constructor (scene: Phaser.Scene, xx: number, yy: number, width: number, height: number,  wheelSize: number)
    {
        var MatterJSRef = scene.matter;

        this.scene = scene;
        this.car = MatterJSRef.composite.create({ label: 'Car' });

        var group = MatterJSRef.body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;

        this.body = MatterJSRef.bodies.rectangle(xx, yy, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.003
            } as MatterJS.IChamferableBodyDefinition);

        this.wheelA = MatterJSRef.bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.9
        } as MatterJS.IBodyDefinition);
                    
        this.wheelB = MatterJSRef.bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.9
        } as MatterJS.IBodyDefinition);
                    
        this.axelA = MatterJSRef.constraint.create({
            bodyB: this.body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: this.wheelA,
            stiffness: 1,
            length: 0
        });
                        
        this.axelB = MatterJSRef.constraint.create({
            bodyB: this.body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: this.wheelB,
            stiffness: 1,
            length: 0
        });
    

        MatterJSRef.composite.add(this.car, this.body);
        MatterJSRef.composite.add(this.car, this.wheelA);
        MatterJSRef.composite.add(this.car, this.wheelB);
        MatterJSRef.composite.add(this.car, this.axelA);
        MatterJSRef.composite.add(this.car, this.axelB);

        scene.matter.world.add(this.car);

        this.keys = scene.input.keyboard.addKeys('D,A');
    }
    // implements
    update(time : number, delta : number){ 
        let decided = false;

        var Body = this.scene.matter.body;
        if (this.keys['D'].isDown) {
            Body.setAngularVelocity(this.wheelA, 3.2);
            Body.setAngularVelocity(this.wheelB, 3.2);
            decided = true;
        }

        if (this.keys['A'].isDown) {
            Body.setAngularVelocity(this.wheelA,-3.2);
            Body.setAngularVelocity(this.wheelB, -3);
            decided = true;
        }

        if (!decided) {
            Body.setAngularVelocity(this.wheelA,0);
            Body.setAngularVelocity(this.wheelB, 0);
        }   
    }
}
