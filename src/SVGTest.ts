import 'phaser';
import { Updatable } from './Updatable';
import "../dist/assets/pathseg";

// Inspiration: https://itnext.io/modular-game-worlds-in-phaser-3-tilemaps-5-matter-physics-platformer-d14d1f614557
// Source: https://codepen.io/garethfoote/pen/wzYzNL

export class SVGTest implements Updatable {
    private scene: Phaser.Scene;

    constructor (scene: Phaser.Scene, xx: number, yy: number)
    {
        var MatterJSRef = scene.matter;
        this.scene = scene;
        
        var vertexSets = [],
        color = '#556270';
       /*
        $('#svg').find('path').each(function(i, path){
            // vertexSets.push(Svg.pathToVertices(path, 100));
            var v = Bodies.fromVertices(100+(i*80), 80, Svg.pathToVertices(path, 20), {
                render: {
                fillStyle: color,
                strokeStyle: color
                }
            }, true);
            console.log(v)
            vertexSets.push(v);
            // World.add(engine.world, v);
        });
        */
        
    }
    // implements
    update(time : number, delta : number){ 
        
    }
}
