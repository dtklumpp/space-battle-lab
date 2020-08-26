const logit = function(input1){
    console.log(input1);
}
logit('you are hearing me talk');

//round:
//you attack 1st alien ship
//if survives, attacks you
//then etc
//if destroy, can attack or retreat
//if retreat, game over (draw)
//if destroy all, win
//if killed, lose
//
//hull = hp
//firepower = damage done with hit
//accuracy = prob of hit
//
//your ship USS Assembly
//hull 20
//firepower 5
//accuracy .7
//aliens
//hull 3-6 randomly
//firepower 2-4 randomly
//accuracy .6-.8 randomly

//battle 6 ships unique values

const randomRange = function(range1, range2){
    output1 = Math.floor(Math.random()*(range2-range1)+range1);
    return output1;
}

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull || randomRange(3,6);
        this.firepower = firepower || randomRange(2,4);
        this.accuracy = accuracy || randomRange(0.6, 0.8);
    }

}
