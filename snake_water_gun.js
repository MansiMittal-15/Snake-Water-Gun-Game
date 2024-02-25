// GAME:- Snake ,water and gun..

const prompt = require("prompt-sync")({sigint:true});

// Program..

let words = ['snake', 'water', 'gun'];
let random = words[Math.floor(Math.random() *words.length)];

let chances = 0, user_points = 0, comp_points = 0;

do {

    let first = prompt(`Enter any one input of the ${words}:- `);
    let second = first.toLowerCase();
    let input = second.trim();
    console.log(input);

    if( random == 'snake' && input == 'water' )
    {
        console.log(`you win!`);
        user_points++;
    }
    else if( random == 'water' && input == 'gun' )
    {
        console.log(`you win!`);
        user_points++;
    }
    else if( random == 'gun' && input == 'snake' )
    {
        console.log(`you win!`);
        user_points++;
    }
    else if( random == 'gun' && input == 'water' )
    {
        console.log(`Computer wins!`);
        comp_points++;
    }
    else if( random == 'snake' && input == 'gun' )
    {
        console.log(`Computer wins!`);
        comp_points++;
    }
    else if( random == 'water' && input == 'snake' )
    {
        console.log(`Computer wins!`);
        comp_points++;
    }
    else{
        console.log(`Enter a vaild input from ${words} only:- `);
    }
    chances++;

}
while(chances <= 5);

if(user_points > comp_points)
{
    console.log(`You win! \n Your ponits are ${user_points}. \n Game Ended!`);
}
else if(comp_points > user_points){
    console.log(`Computer wins! \n Computer points are ${comp_points}. \n Game Ended!`);
}
else{
    console.log("It's a draw. Game Ended!");
}