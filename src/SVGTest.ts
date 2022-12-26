import 'phaser';
import { Updatable } from './Updatable';
import "../dist/assets/pathseg";

// Source: https://codepen.io/garethfoote/pen/wzYzNL

export class SVGTest implements Updatable {
    private scene: Phaser.Scene;

    constructor (scene: Phaser.Scene, xx: number, yy: number)
    {
        var MatterJSRef = scene.matter;
        this.scene = scene;

         /*
        var Common = Matter.Common,
            Bodies = Matter.Bodies;
        

        var vertexSets = [],
        color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);
        
       
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
        vertexSets.push(ground);
        */
    }
    // implements
    update(time : number, delta : number){ 
        
    }
}
