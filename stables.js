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

// This is a template for the final project. You'll be setting up a stable and making
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//
//------------------------- Seting up shop (Assignment 1) -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
// Create a variable and use it to store a message that welcomes visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.
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

//------------------------- First day -------------------------//
//------------------------- First day (Assignment 2) -------------------------//

// Using a constructor, add at least 3 horses to your stables.
// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horse should have the following properties:
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.
// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"
// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

//------------------------- Day to day operations -------------------------//
//------------------------- Day to day operations (Project) -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.
// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
// Create a function references one of your unique horse properties. It should
// contain a conditional or a loop. Invoke it for each horse.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.
// Morning! Create and invoke a function that moves any number horses of your choice outside. It should
// log out statement indicating the horses have been moved to spend time in the sun. 
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.


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


