const logit = function(input1){
    console.log(input1);
}
logit('you are hearing me talk');


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
    constructor(hull, firepower, accuracy, name){
        this.hull = hull || randomRange(3,6);
        this.firepower = firepower || randomRange(2,4);
        this.accuracy = accuracy/100 || randomRange(60, 80)/100;
        this.name = name || 'alien ship';
    }
    attack(target){
        if(Math.random() > this.accuracy){
            target.hull -= this.firepower;
        }
    }
    deliberate(shipsLeft){
        let retreat = prompt("There are "+shipsLeft+" ships left. Retreat--yes?");
        if(retreat.toLowerCase() === "yes"){
            return true;
        }
        else {
            return false;
        }
    }
}

//game start here
//could put this all in a "game" object after
//any easy way to do that??

const myShip = new Ship(20, 5, 70);
const alienShip = new Ship();
const alienFleet = [];
const fleetSize = 6;

//create alien fleet
for(let i =0; i < fleetSize; i++){
    alienFleet.push(new Ship());
}

logit(alienShip);
logit(myShip);
logit(alienFleet);
logit(alienFleet[2]);

//round:
//need one big method b/c need to EXIT at some point
//return result of game and quit...

const playGame = function(hero, villains){
    let activeEnemy = villains[0];
    let safetyVar = 0;
    while ((hero.hull > 0 && villains.length > 0) && safetyVar<1000){
        safetyVar++;
        activeEnemy = villains[0];
        hero.attack(activeEnemy);
        logit(activeEnemy);
        if(activeEnemy.hull <= 0){
            logit("ENEMY SHIP "+(6-villains.length+1)+" DESTROYED");
            logit(villains.length);
            villains.splice(0,1);
            if(villains.length === 0){
                logit(hero.name+" Wins!!!!");
                logit(hero);
                return;
            }
            else {
                activeEnemy = villains[0];
                if(hero.deliberate()){
                    logit(hero.name+" beats a hasty retreat");
                    return;
                }
            }
        }
        activeEnemy.attack(hero);
        if(hero.hull <= 0){
            logit("Aliens Win!!!!!!!!!!");
            logit(villains);
            return;
        }
        logit(hero);
        logit(villains);
    }
    logit("something went wrong");
}

//to play:
playGame(myShip, alienFleet);

//round:

//set active enemy

//you attack 1st alien ship
    //if destroy, can attack or retreat
    //if retreat, game over (draw)
    //if destroy all, win

//figure which is active enemy

//if survives, attacks you
    //if killed, lose
//then etc;

