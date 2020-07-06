export class Jugador {
    hp: number;
    constructor() {
        this.hp = 100;
    }

    recibeDmg(dmg: number) {
        if (dmg >= this.hp ) {
            this.hp = 0;
        } else {
            this.hp = this.hp - dmg;
        }
        return this.hp;
    }
}
