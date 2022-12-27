import 'phaser';
import { Updatable } from './Updatable';
import "../dist/assets/pathseg";

// Inspiration: https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-5-matter-physics-platformer-d14d1f614557
// Source: https://codepen.io/garethfoote/pen/wzYzNL

// Must be created on Scene.Preload !
export class SVGTest implements Updatable {
    private scene: Phaser.Scene;

    constructor (scene: Phaser.Scene, xx: number, yy: number)
    {
        this.scene = scene;
    }

    preload() {
        this.scene.load.xml('drawing', 'assets/drawing.svg');
    }

    create () {
        this.scene.matter.add.fromSVG(400, 900, this.scene.cache.xml.get('drawing'), 10, {isStatic: true} as Phaser.Types.Physics.Matter.MatterBodyConfig);
    }
}
