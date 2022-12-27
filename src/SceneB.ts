//player scene

import 'phaser';
import { CustomScene } from "./CustomScene";
import { Player } from './Player';
import { SVGTest } from './SVGTest';

export class SceneB extends CustomScene {
    player : Player;
    svgtest : SVGTest;


    constructor (name)
    {
        super(name);
    }

    preload() {
        this.svgtest = new SVGTest(this, 100, 100);
        this.addUpdatable(this.svgtest);

        super.preload();
    }

    create ()
    {
        this.matter.world.setBounds();

        var circle = this.matter.add.circle(150, 550, 60, {isStatic: true} as Phaser.Types.Physics.Matter.MatterBodyConfig);

        this.player = new Player(this, 100, 10);
        this.addUpdatable(this.player);

        this.matter.add.mouseSpring();

        super.create();
    }
}
