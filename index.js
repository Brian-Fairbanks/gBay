// ####################################################
// # Dependancies
// ####################################################
const passwords = require('./password');
const inquirer = require('inquirer');

console.log(passwords.sql());


// ####################################################
// # Functions
// ####################################################

// get user response from user, for what their action will be
function mainMenu(){
    return inquirer.prompt(
        {
            type:"list",
            name:"choice",
            Message:"What would you like to do?",
            choices: ["Bid","Post","Exit"]
        }
    );
}

// post a new item to the database that others can bid on
function postItem(){
    console.log('stub');
}

// attempt to set anew bid for an item in the database
function bidOnItem(){
    console.log('stub');
}


// Main menu function, runs while user does not want to exit
async function run(){
    let action;
    do{
        action = await mainMenu();
        action = action.choice;

        switch (action){
            case 'Post':
                postItem();
                break;
            case 'Bid':
                bidOnItem();
                break;
            case 'Exit':
                break;
            default:
                console.log("How did you even get here?!");
        }

    }
    while(action!="Exit")

    console.log("Thank you for using gBay!")
}





// ####################################################
// # Main Function
// ####################################################
run();