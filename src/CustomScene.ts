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

    update(time : number, delta : number) {
        super.update(time, delta);

        for (let i = 0; i < this.updatables.length; i++) {
            this.updatables[i].update(time, delta);
        }
    }
}