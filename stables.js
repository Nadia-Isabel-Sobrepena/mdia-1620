// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.



// INTRODUCTION!!!!

let stableName = "Javascript Stables";
let welcomeMessage = "Welcome to " + stableName + "!";
console.log(welcomeMessage);

// Assisgnment 2


let lucky = {
    name: "Lucky",
    nickname: "Luck",
    favoriteSnack: "oranges",
    age: 8,
    monthlyRent: 500,
    isInside: true,
    colour: "brown",
    isFriendly: true,
    introduce: function () {
        console.log("Hi, I'm " + this.name + ", nickname " + this.nickname + ". I'm " + this.age + " years old and I love " + this.favoriteSnack + ".");
    },
    neigh: function () {
        console.log(this.name + " neighs happily!");
    }
};

let verity = {
    name: "Verity",
    nickname: "Vee",
    favoriteSnack: "beef",
    age: 9,
    monthlyRent: 900,
    isInside: false,
    colour: "yellow",
    isFriendly: false,
    introduce: function () {
        console.log("Hey, its me, its " + this.name + ", nickname " + this.nickname + ". I'm " + this.age + " years old and I love " + this.favoriteSnack + ".");
    },
    smiles: function () {
        console.log(this.name + " smiles suspiciously...");
    }
};

let luna = {
    name: "Luna",
    nickname: "Lulu",
    favoriteSnack: "Yogurt",
    age: 4,
    monthlyRent: 200,
    isInside: true,
    colour: "black",
    isFriendly: true,
    introduce: function () {
        console.log("Hi, I'm " + this.name + ", nickname " + this.nickname + ". I'm " + this.age + " years old and I love " + this.favoriteSnack + ".");
    },
    nap: function () {
        console.log(this.name + " takes a nap.");
    }
};

let horses = [lucky, verity, luna];

let charlie = {
    name: "Charlie",
    nickname: "Chuck",
    favoriteSnack: "apples",
    age: 5,
    monthlyRent: 400,
    isInside: true,
    colour: "grey",
    isFriendly: true,
    introduce: function () {
        console.log("Hi, I'm " + this.name + ", nickname " + this.nickname + ". I'm " + this.age + " years old and I love " + this.favoriteSnack + ".");
    },
    gallop: function () {
        console.log(this.name + " gallops around the field.");
    }
};

horses.push(charlie);

for (const horse of horses) {
    horse.isHungry = true;
}

let totalStalls = 20;

function checkAvailableStalls(stalls, horseArray) {
    let available = stalls - horseArray.length;
    console.log("Available stalls: " + available);
}
checkAvailableStalls(totalStalls, horses);

function logLateRent(horse) {
    let lateFee = 1.20;
    let lateAmount = horse.monthlyRent * lateFee;
    console.log(horse.name + " owes $" + lateAmount + " for late rent.");
}
logLateRent(lucky);

function getHorseNickname(horse) {
    return horse.nickname;
}
let horseNickname = getHorseNickname(verity);
console.log(horseNickname);

//FINAL PART

let treatToCheck = "apples";

function checkHorseTreats(horseArray, treat) {
    for (const horse of horseArray) {
        if (horse.favoriteSnack === treat) {
            console.log(horse.name + " loves " + treat + "!");
            return;
        } else {
            console.log(horse.name + " does not like " + treat + ".");
        }
    }
}
checkHorseTreats(horses, treatToCheck);

function checkFriendliness(horse) {
    if (horse.isFriendly === true) {
        console.log(horse.name + " is friendly.");
    } else {
        console.log(horse.name + " is not friendly...");
    }
}

for (const horse of horses) {
    checkFriendliness(horse);
}

function moveHorsesOutside(selectedHorses) {
    for (const horse of selectedHorses) {
        horse.location = false;
        console.log(horse.name + " has been moved outside to spend time in the sun.");
    }
}
moveHorsesOutside([lucky]);
moveHorsesOutside([luna, charlie]);
moveHorsesOutside(horses);

function feedHorses(horseArray) {
    for (const horse of horseArray) {
        if (horse.location === false) {
            horse.location = true;
            console.log("Calling " + horse.name + " inside for food.");
        }
        horse.isHungry = false;
        console.log(horse.name + " has been fed " + horse.favoriteSnack + ".");
    }
}
feedHorses(horses);