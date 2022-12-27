import 'phaser';
import { Updatable } from './Updatable';

// Custom scene used to facilitate the modularization of objects in Scene class.
export class CustomScene extends Phaser.Scene {
    updatables : Array<Updatable>;

    constructor (name)
    {
        super(name);
        this.updatables = [];
    }

    addUpdatable(updatable: Updatable) {
        this.updatables.push(updatable);
    }

    // this create() must be called after the child create()
    create() {
        for (let i = 0; i < this.updatables.length; i++) {
            if (this.updatables[i].create) {
                this.updatables[i].create();
            }
        }
    }

    update(time : number, delta : number) {
        super.update(time, delta);

        for (let i = 0; i < this.updatables.length; i++) {
            if (this.updatables[i].update) {
                this.updatables[i].update(time, delta);
            }
        }
    }

    preload() {
        for (let i = 0; i < this.updatables.length; i++) {
            if (this.updatables[i].preload) {
                this.updatables[i].preload();
            }
        }
    }
}