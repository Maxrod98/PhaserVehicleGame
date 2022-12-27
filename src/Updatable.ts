// Interface created to facilitate the modularization of creation of objects in the game engine.

export interface Updatable {
    preload?: {(): void};
    create: {(): void};
    update?: {(time : number, delta : number) : void};
}
