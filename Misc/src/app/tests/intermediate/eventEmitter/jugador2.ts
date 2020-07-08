import { EventEmitter } from '@angular/core';

export class Jugador2 {
    hp: number;
    hpCambia = new EventEmitter<number>();

    constructor() {
        this.hp = 100;
    }

    recibeDmg(dmg: number) {
        if (dmg >= this.hp ) {
            this.hp = 0;
        } else {
            this.hp = this.hp - dmg;
        }
        this.hpCambia.emit(this.hp);
    }
}
