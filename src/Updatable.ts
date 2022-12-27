export interface Updatable {
    preload?: {(): void};
    create: {(): void};
    update?: {(time : number, delta : number) : void};
}
