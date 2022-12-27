import 'phaser';
import { Updatable } from './Updatable';

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

    create() {
        for (let i = 0; i < this.updatables.length; i++) {
            if (!this.updatables[i].create) {
                console.log("CREATE");
            }
            if (this.updatables[i].create) {
                this.updatables[i].create();
            }
        }
    }

    update(time : number, delta : number) {
        super.update(time, delta);

        for (let i = 0; i < this.updatables.length; i++) {
            if (!this.updatables[i].update) {
                console.log("UPDATE");
            }
            if (this.updatables[i].update) {
                this.updatables[i].update(time, delta);
            }
        }
    }

    preload() {
        for (let i = 0; i < this.updatables.length; i++) {
            if (!this.updatables[i].preload) {
                console.log("PRELOAD");
            }
            if (this.updatables[i].preload) {
                this.updatables[i].preload();
            }
        }
    }
}