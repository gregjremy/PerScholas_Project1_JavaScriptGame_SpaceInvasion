// ********************Ships********************

// Class
class Ship{
    constructor(fleetDesignation,hull,firepower,accuracy){
        this.name = fleetDesignation
        this.hull = hull || Math.floor(Math.random() * 4) + 3; 
        this.firepower = firepower || Math.floor(Math.random() * 3) + 2
        this.accuracy = accuracy || (Math.floor(Math.random() * 3) + 6) / 10
    }
    initAttack(defendingShip,attackingShip){
        if(Math.random() < attackingShip.accuracy){
            if((defendingShip.hull - attackingShip.firepower) <= 0){
                console.log(defendingShip.name + " has been destroyed!") &  alienShips.splice(0,1) & console.log(alienShips)
            }
            else console.log(defendingShip.name + " still has " + (defendingShip.hull - attackingShip.firepower) + " health remaining.")
            // console.log(defendingShip.name + " still has " + (defendingShip.hull - attackingShip.firepower) + " health remaining.") // TESTING
        }
        else console.log("The attack missed...")
    }    
}

// Player Ship
userShip = new Ship("U.S.S. Schwarznegger",20,5,0.7)

// Array of Alien Ships
const alienShips = [
alpha = new Ship("Alpha"),
beta = new Ship("Beta"),
gamma = new Ship("Gamma"),
delta = new Ship("Delta"),
epsilon = new Ship("Epsilon"),
zeta = new Ship("Zeta")
]



// // *************** GLOBAL OBJECTS, VARIABLES, & FUNCTIONS ***************
  

const game = {
    checkWin: function(){
        if(alienShips.hull <= 0){
            console.log(alienShips[x].name + " has been destroyed!") && alienShips.splice(0,1)
        }
        else if(userShip.hull <= 0){
            console.log("The " + userShip.name + " has been destroyed! GAME OVER")
        }
        else this.alienShips.initAttack(userShip,this.alienShips)
    }
}


// // Text Prompt
// let playerName = prompt("You must be the new Commander. Please enter your credentials to access the ship. (Enter Name)")
// console.log("Welcome aboard Commander " + playerName)

// // Test Area ----------------------------------------------------------------------------------------

// // Working Attack Method with 3 conclusions
// initAttack(defendingShip,attackingShip){
//     if(Math.random() < attackingShip.accuracy){
//         if((defendingShip.hull - attackingShip.firepower) <= 0){
//             console.log(defendingShip.name + " has been destroyed!") &  alienShips.splice(0,1) & advanceNextShip
//         }
//         else console.log(defendingShip.name + " still has " + (defendingShip.hull - attackingShip.firepower) + " health remaining.") & initAlienCounter
//         // console.log(defendingShip.name + " still has " + (defendingShip.hull - attackingShip.firepower) + " health remaining.") // TESTING
//     }
//     else console.log("The attack missed...") & initAlienCounter
// }

userShip.initAttack(alienShips[0],userShip)

