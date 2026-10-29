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



// ASSIGNMENT 1

// JAVASCRIPT STABLES 

let stableName = "Javascript Stables";
let horses = ["Lucky", "Verity", "Luna"];
let lateFee = 1.2;


let luckyBoard = 500;
let lucky = {
    name: "Lucky",
    age: 8,
    favoriteSnack: "oranges",
    board: luckyBoard,
    latePayment: luckyBoard *  lateFee,
}

let verityBoard = 900
let verity = {
    name: "Verity",
    age: 9,
    favoriteSnack: "beef",
    board: verityBoard,
    latePayment: verityBoard * lateFee,
}

let lunaBoard = 200;
let luna = {
    name: "Luna",
    age: 4,
    favoriteSnack: "Yogurt",
    board: lunaBoard,
    latePayment: lunaBoard * lateFee,
}

//NEW HORSE FOR ASSIGNMENT 2 -- HORSE OBJECT
let bojack = {
    name: "Bojack"
}

// WELCOME MESSAGE VARIABLE

let welcomeMessage = " Welcome to " + stableName + "! ";
let horsesIntro = " Meet the horses, " + horses + "!";
console.log(welcomeMessage);
console.log(horsesIntro);

// SPACE
console.log("");
//SPACE

//LATE FEE MESSAGES VARIABLES
let luckyLateFeeMessage = " If you are late to board " + lucky.name + ", you owe " + lucky.latePayment + "$";

//SPACE
console.log("");
//SPACE

//LATE FEE MESSAGES CONSOLE.LOG
console.log(luckyLateFeeMessage);

//------------------ASSIGNMENT2------------------------

let lucky = {

    name: "Lucky",
    nickname: "Luck",
    favoriteSnack: "oranges",
    age: 8,
    monthlyRent: 500,
    location: true, 
    colour: "brown",
    isFriendly: true
};

let verity = {

    name: "Verity",
    nickname: "Vee",
    favoriteSnack: "beef",
    age: 9,
    monthlyRent: 900,
    location: false, 
    colour: "yellow",
    isFriendly: false
};

let lucky = {

    name: "Lucky",
    nickname: "Luck",
    favoriteSnack: "oranges",
    age: 8,
    monthlyRent: 500,
    location: true, 
    colour: "brown"
    isFriendly: true
};

let lucky = {

    name: "Lucky",
    nickname: "Luck",
    favoriteSnack: "oranges",
    age: 8,
    monthlyRent: 500,
    location: true, 
    colour: "brown"
    isFriendly: true
};



let horses = [lucky, verity, luna];


