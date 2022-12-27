import 'phaser';
import { CustomScene } from "./CustomScene";
import { CarObject } from "./CarObject";
import { Player } from './Player';

export class SceneA extends CustomScene {
    car : CarObject;
    car2 : CarObject;

    constructor (name)
    {
        super(name);
    }

    create ()
    {
        this.matter.world.setBounds();

        var rectangle = this.matter.add.circle(150, 160, 60);

        this.car = new CarObject(this, 100, 10, 300, 50, 50);
        this.addUpdatable(this.car);
        this.car2 = new CarObject(this, 100, 100, 300, 50, 50);
        this.addUpdatable(this.car2);

        var player = new Player(this, 100, 10);
        this.addUpdatable(player);

        this.matter.add.mouseSpring();

        super.create();
    }
}