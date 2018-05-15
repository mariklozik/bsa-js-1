let fight = (fighter, improvedFighter, ...points) => {
    let indx = 0,
        temp;

    while(improvedFighter.health > 0){

        fighter.hit(improvedFighter, points[indx]);
        if(improvedFighter.health <= 0) {
            console.log(fighter.name + ' wins!');
            break;
        }

        temp = fighter;
        fighter = improvedFighter;
        improvedFighter = temp;

        indx = (indx === points.length - 1) ? 0 : indx++;

    }
};

let fighter = new Fighter('DarthVader', 200, 95000);
let improvedFighter = new ImprovedFighter('Luke', 500, 80000);

fight(fighter, improvedFighter, 1, 2, 3, 4, 5);