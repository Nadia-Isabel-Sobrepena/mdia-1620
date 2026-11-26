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

for (const horse of horses) {
    if (horse.favoriteSnack === treatToCheck) {
        console.log(horse.name + " loves " + treatToCheck + "!");
        break;
    } else {
        console.log(horse.name + " does not like " + treatToCheck + ".");
    }
}

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

function moveHorsesOutside(selectedHorses, isDark = false) {
    for (const horse of selectedHorses) {
        if (isDark === true) {
            if (horse.isInside === false) {
                horse.isInside = true;
                console.log("It's getting dark, " + horse.name + " goes into the stables.");
            }
        } else {
            if (horse.isInside === true) {
                horse.isInside = false;
                console.log(horse.name + " has been moved outside to spend time in the sun.");
            }
        }
    }
}

function feedHorses(horseArray) {
    for (const horse of horseArray) {
        if (horse.isInside === false) {
            horse.isInside = true;
            console.log("Calling " + horse.name + " inside for food.");
        }
        horse.isHungry = false;
        console.log(horse.name + " has been fed " + horse.favoriteSnack + ".");
    }
}


