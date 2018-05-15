class Fighter {
    constructor( name = '', power = 0, health = 1 ) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    hit(enemy, point = 1) {
        enemy.setDamage(point * this.power);
    }

    setDamage(damage = 0) {
        this.health -= damage;
        console.log(this.name + ` health: ` + this.health);
    }
}