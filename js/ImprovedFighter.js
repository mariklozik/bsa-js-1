class ImprovedFighter extends Fighter {
    constructor(name = '', power = 0, health = 1) {
        super(name, power, health);
    }

    doubleHit(enemy, point = 1) {
        this.hit(enemy, point * 2);
    }
}